type TitleProps = {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
};

export const Title = ({ type = "h1", text }: TitleProps) => {
  const CustomTag = `${type}` as keyof JSX.IntrinsicElements;

  const classNames = {
    h1: "text-3xl",
    h2: "text-2xl",
    h3: "text-xl",
    h4: "text-lg",
    h5: "text-md",
    h6: "text-sm",
  };

  const styles = classNames[type] || "";

  return (
    <CustomTag className={`${styles} font-bold text-primary`}>{text}</CustomTag>
  );
};
