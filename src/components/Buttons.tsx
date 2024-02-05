import { DownArrowIcon } from "@/icons/icons";

interface TabsContentButtonProps {
  buttonText: string;
  variant?: "primary";
}

function Button({ buttonText, variant = "primary" }: TabsContentButtonProps) {
  const variantClasses = {
    // add any variant of button you want to if needed
    primary:
      "text-lg font-semibold bg-secondary border-2 border-black rounded-5xl px-10 py-4 hover:bg-shadow transition-all duration-300 ease-in-out hover:text-white",
  };

  const className = variantClasses[variant];

  return <button className={className}>{buttonText}</button>;
}

// this button is for the tabs section this is not commonly used so that i have not made its variants
interface TabsButtonProps {
  buttonText: string;
  activeButton?: string;
  activeButtonBack?: string;
}

function TabsButton({
  buttonText,
  activeButton,
  activeButtonBack,
}: TabsButtonProps) {
  return (
    <button className="relative z-10 inline-block rounded-bl-lg group font-base font-medium">
      <div
        className={`relative bg-primary-200 px-6 rounded-bl-[inherit] py-4 rounded-tr-4xl transition-all duration-300 ease-in-out group-hover:-translate-y-2 ${activeButtonBack}`}
      >
        <span className="flex items-center gap-3 ">
          {buttonText} <DownArrowIcon />
        </span>
      </div>
      <span
        className={`absolute h-full left-0 bottom-0 bg-shadow rounded-bl-[inherit] -z-10 rounded-tr-5xl group-hover:w-[calc(100%+8px)] transition-all duration-300 ease-in-out ${activeButton}`}
      />
    </button>
  );
}

export { Button, TabsButton };
