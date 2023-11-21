import styled from 'styled-components';

type ButtonProps = {
    variant?: "primary" | "secondary"
    children: React.ReactNode
}

const StyledButton = styled.button<{ variant: "primary" | "secondary"}>`
    background-color: ${props => props.variant === "primary" ? "red" : "blue" };
    padding: 5px;

    &:hover {
        background-color: yellow;
    }
`

export const ButtonStyledComponents = ({ variant = "primary", children }: ButtonProps) => {
    return <StyledButton variant={variant}>{children}</StyledButton>
}