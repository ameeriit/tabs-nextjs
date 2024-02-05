export interface TabProps {
  tabTitle: string;
  tabIcon: React.ReactNode;
  tabContent: string;
  tabContentTitle: string;
  tabContentParagraph: string;
  accordion?: AccordionItem[];
}

export interface AccordionItem {
  accordionTitle: string;
  accordionContent: string;
  accordionIcon: React.ReactNode;
}

export interface TabsProps {
  tabsData: TabProps[];
}
