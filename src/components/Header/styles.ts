import styled, { css } from "styled-components";

export const HeaderContainer = styled.nav`
  width: 100%;
  padding: 2rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme["gray-100"]};
    background-color: ${({ theme }) => theme["yellow-700"]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  ${({ variant, theme }) => css`
    background: ${theme[`${variant}-300`]};
    color: ${theme[`${variant}-700`]};
  `}

  ${({ variant, theme }) =>
    variant === "purple" &&
    css`
      svg {
        color: ${theme[`${variant}-500`]};
      }
    `}
`;
