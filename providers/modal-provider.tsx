"use client";

import PreviewModal from "@/components/preview-modal";
import { useEffect, useState } from "react";

interface ModalProviderProps {}

const ModalProvider = (props: ModalProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
