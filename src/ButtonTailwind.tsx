import styled from 'styled-components';

type ButtonProps = {
    variant?: "primary" | "secondary"
    children: React.ReactNode
}

//background-color: red
//padding: 5px

export const ButtonTailwind = ({ variant = "primary", children }: ButtonProps) => {
    return <button className="bg-red-700 p-1 hover:bg-blue-600">{children}</button>
}