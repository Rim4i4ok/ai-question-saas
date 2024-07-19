"use client";

import { useProModal } from "@/hooks/use-pro-modal";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export const ProModal = () => {
  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center gap-y-4 pb-2">
            Upgrade to Premium
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
