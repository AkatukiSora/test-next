import styled, { css } from "styled-components"
const variants = {
    primary: {
        color: "#ffffff",
        backgroundColor: "1d3461",
        border: "none",
    },
    success: {
        color: "#ffffff",
        backgroundColor: "5ab203",
        border: "none", 
    },
    transport: {
        color: "#111111",
        backgroundColor: "transport",
        border: "1px solid black",
    },
} as const

export type StyledButtonProps = {
    variant: keyof typeof variants
}
export const StyledButton = styled.button<StyledButtonProps>`
    ${({ variants }) => {
        const style = variants[variants]

        return css`
            color: ${style.color};
            background-color: ${style.backgroundColor};
            border: ${style.border};
        `;
    }}

    border-redius: 12px;
    font-size: 14px;
    height: 38px;
    line-height: 22px;
    letter-spacing: 0;
    cursor: pointer;

    &:focus {
        outline: none
    }
`