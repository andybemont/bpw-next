"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import ContactOverlay from "../contact-overlay/contact-overlay";
import { trackEvent } from "@/app/lib/analytics";

type ContactContextValue = {
  openContact: (source?: string) => void;
  closeContact: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({
  children,
  autoOpen = false,
}: {
  children: ReactNode;
  autoOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(autoOpen);
  const hasTrackedView = useRef(false);

  useEffect(() => {
    if (autoOpen) {
      setIsOpen(true);
    }
  }, [autoOpen]);

  useEffect(() => {
    if (isOpen && !hasTrackedView.current) {
      hasTrackedView.current = true;
      trackEvent("contact_form_view");
    }
    if (!isOpen) {
      hasTrackedView.current = false;
    }
  }, [isOpen]);

  const openContact = useCallback((source = "unknown") => {
    trackEvent("availability_cta_click", { source });
    setIsOpen(true);
  }, []);

  const closeContact = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ openContact, closeContact }),
    [openContact, closeContact],
  );

  return (
    <ContactContext.Provider value={value}>
      {children}
      <ContactOverlay isOpen={isOpen} onClose={closeContact} />
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return context;
}
