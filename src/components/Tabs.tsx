import { TabsProps } from "@/types/common";
import { useState } from "react";
import Accordion from "./Accordion";
import { Button } from "./Buttons";
import Tab from "./Tab";

const Tabs: React.FC<TabsProps> = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className="sm:overflow-x-auto mb-10">
        <div className="relative flex flex-col gap-y-4 sm:gap-y-0 sm:grid sm:grid-cols-[repeat(4,_minmax(265px,_1fr))] gap-x-3 mb-2 w-full">
          {tabsData.map((tab, tabIndex) => (
            <>
              <Tab
                key={tabIndex}
                title={tab.tabTitle}
                icon={tab.tabIcon}
                content={tab.tabContent}
                onClick={() => handleTabClick(tabIndex)}
                isActive={tabIndex === activeTab}
                tabIndex={tabIndex}
              />

              <div className="block sm:hidden relative">
                {tabIndex === activeTab && (
                  <div
                    key={tabIndex}
                    className={`items-center bg-primary-100 px-6 py-8 lg:px-10 lg:py-12 rounded-xl gap-8 lg:gap-0 ${
                      tabIndex === activeTab
                        ? "flex lg:flex-row flex-col -mt-8"
                        : "hidden"
                    }`}
                  >
                    <div className="w-full lg:w-1/2">
                      <div className="lg:max-w-[465px] mx-auto">
                        <h1 className="mb-5 leading-[1.2]">
                          {tab.tabContentTitle}
                        </h1>
                        <p className="text-lg lg:text-xl font-normal ">
                          {tab.tabContentParagraph}
                        </p>
                      </div>
                    </div>
                    {tab.accordion && (
                      <div className="w-full lg:w-1/2">
                        <Accordion items={tab.accordion} />
                      </div>
                    )}
                    <div className="text-left w-full">
                      <Button buttonText="Discover product" />
                    </div>
                  </div>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="hidden sm:block">
        {tabsData.map((tab, tabAccordionIndex) => (
          <div
            key={tabAccordionIndex}
            className={`items-center bg-primary-100 px-10 py-12 rounded-6xl gap-10 lg:gap-0 ${
              tabAccordionIndex === activeTab
                ? "flex lg:flex-row flex-col"
                : "hidden"
            }`}
          >
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-[465px] mx-auto">
                <h1 className="mb-4">{tab.tabContentTitle}</h1>
                <p className="text-lg lg:text-xl font-normal mb-12">
                  {tab.tabContentParagraph}
                </p>
                <Button buttonText="Discover product" />
              </div>
            </div>
            {tab.accordion && (
              <div className="w-full lg:w-1/2">
                <Accordion items={tab.accordion} />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
