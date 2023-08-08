"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { SlidersHorizontal, X } from "lucide-react";

import { Color, Size } from "@/types";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters = ({ colors, sizes }: MobileFiltersProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className='flex items-center gap-x-2 md:hidden'>
        Filters
        <SlidersHorizontal size={20} />
      </Button>
      <Dialog
        as='div'
        open={open}
        onClose={onClose}
        className='relative z-40 lg:hidden '
      >
        {/* Background */}
        <div className='fixed inset-0 bg-black bg-opacity-25' />
        {/* Dialog position */}
        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            {/* Close Button */}
            <div className='flex items-center justify-end px-4'>
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <Dialog.Title className={"text-2xl font-semibold border-b p-2"}>
              Filters
            </Dialog.Title>
            {/* Render Filters */}
            <div className='p-4'>
              <Filter valueKey={"sizeId"} name={"Sizes"} data={sizes} />
              <Filter valueKey={"colorId"} name={"Colors"} data={colors} />
            </div>

            {/* ... */}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
