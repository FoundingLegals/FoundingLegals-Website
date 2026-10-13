export interface FreeConsultationOptions {
  service?: string;
  topic?: string;
  notes?: string;
}

export function openFreeConsultation(options?: FreeConsultationOptions) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-free-consultation", {
        detail: options || {},
      })
    );
  }
}

export function closeFreeConsultation() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("close-free-consultation"));
  }
}
