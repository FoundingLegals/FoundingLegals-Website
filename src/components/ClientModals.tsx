"use client";

import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/Chatbot"), {
  ssr: false,
});

const CostEstimatorModal = dynamic(() => import("@/components/CostEstimatorModal"), {
  ssr: false,
});

export default function ClientModals() {
  return (
    <>
      <CostEstimatorModal />
      <Chatbot />
    </>
  );
}
