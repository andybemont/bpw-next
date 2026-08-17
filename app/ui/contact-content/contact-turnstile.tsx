"use client";

import {
  Turnstile,
  type TurnstileInstance,
} from "@marsidev/react-turnstile";
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";

export type ContactTurnstileHandle = {
  getToken: () => Promise<string>;
  reset: () => void;
};

type ContactTurnstileProps = {
  widgetKey?: number;
  onReady?: (token: string) => void;
  onError?: () => void;
};

const TOKEN_TIMEOUT_MS = 15_000;

const ContactTurnstile = forwardRef<ContactTurnstileHandle, ContactTurnstileProps>(
  function ContactTurnstile({ widgetKey = 0, onReady, onError }, ref) {
    const turnstileRef = useRef<TurnstileInstance>(null);
    const tokenRef = useRef<string | null>(null);
    const waitersRef = useRef<
      Array<{
        resolve: (token: string) => void;
        reject: (error: Error) => void;
        timeoutId: number;
      }>
    >([]);

    const rejectWaiters = useCallback((message: string) => {
      const waiters = waitersRef.current.splice(0);
      for (const waiter of waiters) {
        window.clearTimeout(waiter.timeoutId);
        waiter.reject(new Error(message));
      }
    }, []);

    const resolveWaiters = useCallback((token: string) => {
      tokenRef.current = token;
      const waiters = waitersRef.current.splice(0);
      for (const waiter of waiters) {
        window.clearTimeout(waiter.timeoutId);
        waiter.resolve(token);
      }
    }, []);

    const handleSuccess = useCallback(
      (token: string) => {
        resolveWaiters(token);
        onReady?.(token);
      },
      [onReady, resolveWaiters],
    );

    const handleFailure = useCallback(() => {
      rejectWaiters("turnstile-failed");
      onError?.();
    }, [onError, rejectWaiters]);

    useImperativeHandle(
      ref,
      () => ({
        getToken: async () => {
          const current = turnstileRef.current?.getResponse() ?? tokenRef.current;
          if (current && !turnstileRef.current?.isExpired()) {
            return current;
          }

          return new Promise<string>((resolve, reject) => {
            const timeoutId = window.setTimeout(() => {
              waitersRef.current = waitersRef.current.filter(
                (waiter) => waiter.timeoutId !== timeoutId,
              );
              reject(new Error("turnstile-timeout"));
            }, TOKEN_TIMEOUT_MS);

            waitersRef.current.push({ resolve, reject, timeoutId });

            if (current) {
              turnstileRef.current?.reset();
            }
          });
        },
        reset: () => {
          rejectWaiters("turnstile-reset");
          tokenRef.current = null;
          turnstileRef.current?.reset();
        },
      }),
      [rejectWaiters],
    );

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
    if (!siteKey) {
      return null;
    }

    return (
      <Turnstile
        key={widgetKey}
        ref={turnstileRef}
        siteKey={siteKey}
        onSuccess={handleSuccess}
        onError={handleFailure}
        onTimeout={handleFailure}
        onExpire={handleFailure}
        options={{
          size: "flexible",
          appearance: "interaction-only",
        }}
      />
    );
  },
);

export default ContactTurnstile;
