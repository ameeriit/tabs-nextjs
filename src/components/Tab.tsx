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
      className={` ${isActive ? "bg-white" : ""}`}
    >
      <div className="pl-5">
        <div>
          <h3>{title}</h3>
          <div>{icon}</div>
        </div>
        <p className="mb-4">{content}</p>
      </div>
      <div></div>
    </div>
  );
};

export default Tab;
