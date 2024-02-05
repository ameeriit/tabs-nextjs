import { AccordionDownIcon } from "@/icons/icons";
import { useState } from "react";

interface AccordionProps {
  items: AccordionItem[];
}

interface AccordionItem {
  accordionTitle: string;
  accordionContent: string;
  accordionIcon: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ul className="w-full mx-auto max-w-[420px]">
      {items.map((accordionItem, accordionIndex) => (
        <li key={accordionIndex} className="border-b-[1px] pt-4 pb-2">
          <div
            className="flex justify-between items-center mb-2 cursor-pointer"
            onClick={() => handleToggle(accordionIndex)}
          >
            <div className="flex gap-2">
              {accordionItem.accordionIcon}
              <h5>{accordionItem.accordionTitle}</h5>
            </div>
            <AccordionDownIcon
              className={`transform transition-transform duration-500 ${
                openIndex === accordionIndex ? "-rotate-180" : ""
              }`}
            />
          </div>
          <p
            className={`accordion-content transition-all duration-500 ease-in-out ${
              openIndex === accordionIndex
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {accordionItem.accordionContent}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Accordion;
