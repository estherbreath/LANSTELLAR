'use client'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

interface ModalProps {
    open: boolean;
    setOpen: (value: boolean) => void;
    children: React.ReactNode;
    className?: string;
  }

export default function BaseModal({open, setOpen, children, className} :ModalProps) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className={`relative text-white transform overflow-hidden rounded-lg bg-[#230C33] px-4 pb-4 pt-5 text-center shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8  sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95  ${className ? className : "xl:max-w-[489px] xl:w-full"} xl:p-6 `}
          >
            
               {children}
        
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
