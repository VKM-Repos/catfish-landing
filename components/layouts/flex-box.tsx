type FlexBoxProps = {
  children: React.ReactNode;
  direction?: "row" | "col";
  justify?: "start" | "center" | "end" | "between" | "around" | "stretch" | "";
  align?: "start" | "center" | "end" | "stretch" | "";
  gap?: string;
  className?: string;
  width?: string;
  maxWidth?: string;
};

export const FlexBox = ({
  children,
  direction = "row",
  justify = "between",
  align = "center",
  gap = "gap-4",
  className = "",
  // width = "[1440px]",
  // maxWidth = "[1440px]",
}: FlexBoxProps) => {
  return (
    <div
      className={`flex flex-${direction} justify-${justify} items-${align} ${gap} ${className} w-[1440px] max-w-[1440px]`}
    >
      {children}
    </div>
  );
};
