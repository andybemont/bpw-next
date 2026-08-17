"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import ContactOverlay from "../contact-overlay/contact-overlay";

type ContactContextValue = {
  openContact: () => void;
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

  useEffect(() => {
    if (autoOpen) {
      setIsOpen(true);
    }
  }, [autoOpen]);

  const openContact = useCallback(() => setIsOpen(true), []);
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
