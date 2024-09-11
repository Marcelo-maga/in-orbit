import { Radio, cn, type RadioProps } from "@nextui-org/react";

interface CustomRadioProps extends RadioProps {
  children: React.ReactNode;
}

export function CustomRadio(props: CustomRadioProps) {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center",
          "flex-row max-w-[900px] cursor-pointer rounded-lg gap-4 p-2 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
    >
      {children}
    </Radio>
  );
}
