"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl font-semibold text-primary-900">
        Something went wrong
      </h1>
      <p className="mt-3 text-primary-700">
        We hit an unexpected error loading this page.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-md bg-primary-900 px-4 py-2 text-sm text-primary-50"
      >
        Try again
      </button>
      {process.env.NODE_ENV === "development" && (
        <pre className="mt-6 w-full overflow-x-auto rounded bg-primary-100 p-3 text-left text-xs text-primary-800">
          {error.message}
        </pre>
      )}
    </main>
  );
}
