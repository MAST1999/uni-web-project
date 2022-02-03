import { ButtonType } from "../utilities/ButtonType";

type Props = {
  action: CallableFunction;
  buttonType: ButtonType;
  children?: React.ReactNode;
  className?: string;
};

const Button = ({ action, buttonType, children, className }: Props) => {
  return (
    <button
      className={`${
        buttonType === ButtonType.Primary
          ? " border-2 border-gray-500 rounded-lg px-1 py-2 text-sm bg-slate-300 h-fit min-w-[100px]"
          : "border-2 border-zinc-400 rounded-lg px-1 py-2 text-sm bg-slate-200 h-fit min-w-[100px]"
      } ${className}`}
      onClick={() => {
        action();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
