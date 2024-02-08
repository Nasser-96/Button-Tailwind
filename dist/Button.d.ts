import { SizesEnum, VariantsEnum, ColorsEnum } from './enums.js';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: SizesEnum;
    variant?: VariantsEnum;
    color?: ColorsEnum;
    icon?: JSX.Element;
}
declare const Button: React.FC<ButtonProps>;

export { Button };
