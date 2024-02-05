import { DownArrowIcon } from "@/icons/icons";

interface TabProps {
  title: string;
  icon: React.ReactNode;
  content: string;
  onClick: (index: number) => void;
  isActive: boolean;
  index: number; // Add index prop if needed
}

const Tab: React.FC<TabProps> = ({
  title,
  icon,
  content,
  onClick,
  isActive,
  index,
}) => {
  return (
    <div
      onClick={() => onClick(index)}
      className={`flex-1 border-[1px] rounded-[8px] border-gray hover:bg-white pt-6 pr-5 transition-all ease-in-out duration-200 flex flex-col justify-between ${
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
        <button className="relative z-10 inline-block rounded-bl-lg group font-base font-medium">
          <div
            className={`relative bg-primary-200 px-6 rounded-bl-[inherit] py-4 rounded-tr-4xl transition-all duration-300 ease-in-out group-hover:-translate-y-2 ${
              isActive ? "-translate-y-2" : ""
            }`}
          >
            <span className="flex items-center gap-3 ">
              Discover <DownArrowIcon />
            </span>
          </div>
          <span
            className={`absolute h-full left-0 bottom-0 bg-shadow rounded-bl-[inherit] -z-10 rounded-tr-5xl group-hover:w-[calc(100%+8px)] w-full transition-all duration-300 ease-in-out ${
              isActive ? "w-[calc(100%+8px)]" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Tab;
