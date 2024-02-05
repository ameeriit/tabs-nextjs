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
    <ul>
      {items.map((accordionItem, accordionIndex) => (
        <li key={accordionIndex}>
          <div onClick={() => handleToggle(accordionIndex)}>
            <div>
              {accordionItem.accordionIcon}
              <h5>{accordionItem.accordionTitle}</h5>
            </div>
            <AccordionDownIcon
              className={` ${
                openIndex === accordionIndex ? "-rotate-180" : ""
              }`}
            />
          </div>
          <p
            className={` ${
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
