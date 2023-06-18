'use client';

import { useCallback, useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

export const Accordion = ({ title, content }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  return (
    <div className="mb-2">
      <div
        className="flex items-center justify-between py-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <span className="text-gray-500">{open ? '-' : '+'}</span>
      </div>
      {open && (
        <div className="py-2">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
