import * as react_jsx_runtime from 'react/jsx-runtime';

declare enum ModalSizeEnum {
    XLARGE = "XLARGE",
    LARGE = "LARGE",
    MEDIUM = "MEDIUM",
    SMALL = "SMALL"
}
interface ModalProps {
    children: JSX.Element;
    size?: string;
    img?: string;
    withConfetti?: boolean;
    imgStyle?: string;
    exstraClasses?: string;
}
declare function Modal({ children, size, img, withConfetti, imgStyle, exstraClasses, }: ModalProps): react_jsx_runtime.JSX.Element;

export { Modal, type ModalProps, ModalSizeEnum, Modal as default };
