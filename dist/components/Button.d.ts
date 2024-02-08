import { SizesEnum, VariantsEnum, ColorsEnum } from '../types_enums/enums.js';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: SizesEnum;
    variant?: VariantsEnum;
    color?: ColorsEnum;
    icon?: JSX.Element;
}
declare const Button: React.FC<ButtonProps>;

export { Button, type ButtonProps };
