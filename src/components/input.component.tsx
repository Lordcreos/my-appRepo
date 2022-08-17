import { Label } from "./label.component";

type InputProps = {
  label?: string;
} & React.HTMLProps<HTMLInputElement>;

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      {label && <Label text={label} addClassName="font-semibold mb-1" />}
      <input
        className="w-full py-2 px-3 border border-primary text-primary rounded-md focus:outline-none"
        {...props}
      />
    </div>
  );
};
