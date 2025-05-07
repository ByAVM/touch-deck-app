import { createToaster } from "@ark-ui/react";

export const toaster = createToaster({
  placement: "top",
  duration: 2000,
  gap: 8,
  pauseOnPageIdle: true
});
