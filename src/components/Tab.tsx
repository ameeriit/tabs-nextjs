import { PlusIcon } from "@/icons/icons";
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
      className={`relative sm:border-[1px] rounded-[8px] bg-lightGray hover:bg-white sm:border-gray pt-6 pr-5 transition-all ease-in-out duration-200 flex flex-col justify-between ${
        isActive ? " pb-6 sm:pb-0 bg-white" : "bg-white sm:bg-lightGray"
      }`}
    >
      <div className="pl-5">
        <div className="flex items-center justify-between mb-4 sm:mb-0">
          <div className="flex flex-row sm:flex-row-reverse sm:justify-between sm:mb-4 gap-2 items-center sm:items-start w-full">
            <div>{icon}</div>
            <h4 className="text-xl sm:text-lg flex tracking-tight">{title}</h4>
          </div>
          <div className="sm:hidden">
            <PlusIcon />
          </div>
        </div>
        <p className="mb-4 hidden sm:block">{content}</p>
      </div>
      <div className="hidden sm:block">
        <TabsButton
          buttonText="Discover"
          activeButton={isActive ? "w-[calc(100%+8px)]" : "w-full"}
          activeButtonBack={
            isActive ? "-translate-y-2 bg-primary-200" : "bg-gray"
          }
        />
      </div>
      {isActive ? (
        ""
      ) : (
        <span className="block sm:hidden absolute w-full h-5 bg-primary-200 -bottom-2 -z-10 rounded-b-xl" />
      )}
    </div>
  );
};

export default Tab;
