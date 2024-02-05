import { TabsProps } from "@/types/common";
import { useState } from "react";
import Accordion from "./Accordion";
import { Button } from "./Buttons";
import Tab from "./Tab";

const Tabs: React.FC<TabsProps> = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="overflow-x-auto w-full">
        <div className="flex flex-nowrap gap-3 mb-12 w-full">
          {tabsData.map((tab, index) => (
            <Tab
              key={index}
              title={tab.tabTitle}
              icon={tab.tabIcon}
              content={tab.tabContent}
              onClick={() => handleTabClick(index)}
              isActive={index === activeTab}
              index={index}
            />
          ))}
        </div>
      </div>
      {tabsData.map((tab, index) => (
        <div
          key={index}
          className={`items-center bg-primary-100 px-10 py-12 rounded-6xl ${
            index === activeTab ? "flex" : "hidden"
          }`}
        >
          <div className="w-1/2">
            <div className="max-w-[465px] mx-auto">
              <h1 className="mb-4">{tab.tabContentTitle}</h1>
              <p className="text-xl font-normal mb-12">
                {tab.tabContentParagraph}
              </p>
              <Button buttonText="Discover product" />
            </div>
          </div>
          {tab.accordion && (
            <div className="w-1/2">
              <Accordion items={tab.accordion} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Tabs;
