type ButtonProps = {
    variant?: "primary" | "secondary"
    children: React.ReactNode
}

export const Button = ({ variant = "primary", children }: ButtonProps) => {

    const btnStyle = {
        padding: "5px",
        backgroundColor: "blue"
    }

    return <button style={btnStyle}>{children}</button>
}