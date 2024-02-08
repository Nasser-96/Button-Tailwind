interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean;
    hint?: string;
}
declare function InputField({ hint, isValid, ...props }: InputFieldProps): JSX.Element;

export { InputField };
