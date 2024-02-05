import { useState } from "react";
import Accordion from "./Accordion";
import { TabsButton } from "./Buttons";
import Tab from "./Tab";

interface TabProps {
  tabTitle: string;
  tabIcon: React.ReactNode;
  tabContent: string;
  onClick: () => void;
  isActive: boolean;
  index: number;
  tabContentTitle: string;
  tabContentParagraph: string;
  accordion?: AccordionItem[];
}

interface AccordionItem {
  accordionTitle: string;
  accordionContent: string;
  accordionIcon: React.ReactNode;
}

interface TabsProps {
  tabsData: TabProps[];
}

const Tabs: React.FC<TabsProps> = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div>
        <div>
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
          className={` ${index === activeTab ? "flex" : "hidden"}`}
        >
          <div>
            <div>
              <h1>{tab.tabContentTitle}</h1>
              <p>{tab.tabContentParagraph}</p>
              <TabsButton buttonText="Discover product" />
            </div>
          </div>
          {tab.accordion && (
            <div>
              <Accordion items={tab.accordion} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Tabs;
