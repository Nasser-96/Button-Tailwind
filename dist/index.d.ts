declare enum ColorsEnum {
    Primary = "primary",
    Secondary = "secondary",
    Danger = "danger",
    Success = "success",
    Warning = "warning",
    Accent = "accent",
    Muted = "muted",
    White = "white"
}
declare enum VariantsEnum {
    Filled = "filled",
    Outline = "outline",
    Muted = "muted",
    Link = "link",
    None = "none",
    White = "white"
}
declare enum SizesEnum {
    Small = "sm",
    Medium = "md",
    Large = "lg"
}
declare enum DirectionEnum {
    LTR = "ltr",
    RTL = "rtl"
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: SizesEnum;
    variant?: VariantsEnum;
    color?: ColorsEnum;
    icon?: JSX.Element;
}
declare const Button: React.FC<ButtonProps>;

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean;
    hint?: string;
}
declare function InputField({ hint, isValid, ...props }: InputFieldProps): JSX.Element;

export { Button, type ButtonProps, ColorsEnum, DirectionEnum, InputField, type InputFieldProps, SizesEnum, VariantsEnum };
