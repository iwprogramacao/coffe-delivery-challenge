import styled, { css } from "styled-components";

export const StyledIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;

interface IconProps {
  variant: "purple" | "light-yellow" | "dark-yellow" | "gray";
}

export const IconContainer = styled.div<IconProps>`
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  ${({ theme, variant }) =>
    variant === "purple" &&
    css`
      background: ${theme[`${variant}-500`]};
    `}

  ${({ theme, variant }) =>
    variant === "light-yellow" &&
    css`
      background: ${theme["yellow-500"]};
    `}

  ${({ theme, variant }) =>
    variant === "dark-yellow" &&
    css`
      background: ${theme["yellow-700"]};
    `}
  ${({ theme, variant }) =>
    variant === "gray" &&
    css`
      background: ${theme["gray-700"]};
    `}

  color: ${(props) => props.theme["gray-100"]};
`;
