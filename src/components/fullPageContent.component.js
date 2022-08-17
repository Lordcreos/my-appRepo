import { Button, ButtonProps } from "./button.component";
import { Icon } from "./icon.component";
import { Label } from "./label.component";
import { Title } from "./title.component";

type FullPageContentProps = {
  icon: string;
  title: string;
  description: string;
  buttons: ButtonProps[];
};

export const FullPageContent = ({
  icon,
  title,
  description,
  buttons,
}: FullPageContentProps) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div />
      <section className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-32 h-32 rounded-full bg-primary bg-opacity-20">
          <Icon size="large" name={icon} />
        </div>
        <div className="px-6 text-center">
          <section className="py-6">
            <Title type="h3" text={title} />
          </section>
          <section className="text-center in-lineblock">
            <Label text={description} color="secondary" />
          </section>
        </div>
      </section>
      <footer className="flex flex-col px-3 my-4 gap-y-4">
        {buttons.map((button) => {
          return <Button {...button} />;
        })}
      </footer>
    </div>
  );
};
