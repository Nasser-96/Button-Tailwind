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

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: SizesEnum;
    variant?: VariantsEnum;
    color?: ColorsEnum;
    icon?: JSX.Element;
}
declare const Button: React.FC<ButtonProps>;

export { Button, type ButtonProps, ColorsEnum, SizesEnum, VariantsEnum };
