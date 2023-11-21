import styling from './ButtonCssModule.module.css';

type ButtonProps = {
    variant?: "primary" | "secondary"
    children: React.ReactNode
}

export const ButtonCssModules = ({ variant = "primary", children }: ButtonProps) => {
    return <button className={`${styling.btnStylingRed} ${styling.btnStyling}`}>{children}</button>
}