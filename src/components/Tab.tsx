import { TabsButton } from "./Buttons";

interface TabProps {
  title: string;
  icon: React.ReactNode;
  content: string;
  onClick: (index: number) => void;
  isActive: boolean;
  tabIndex: number;
}

const Tab: React.FC<TabProps> = ({
  title,
  icon,
  content,
  onClick,
  isActive,
  tabIndex,
}) => {
  return (
    <div
      onClick={() => onClick(tabIndex)}
      className={`border-[1px] rounded-[8px] border-gray hover:bg-white pt-6 pr-5 transition-all ease-in-out duration-200 flex flex-col justify-between ${
        isActive ? "bg-white" : ""
      }`}
    >
      <div className="pl-5">
        <div className="flex justify-between mb-4">
          <h3 className="flex leading-7 tracking-tight">{title}</h3>
          <div>{icon}</div>
        </div>
        <p className="mb-4">{content}</p>
      </div>
      <div>
        <TabsButton
          buttonText="Discover"
          activeButton={isActive ? "w-[calc(100%+8px)]" : "w-full"}
          activeButtonBack={isActive ? "-translate-y-2" : ""}
        />
      </div>
    </div>
  );
};

export default Tab;
