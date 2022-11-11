import { ReactNode } from "react";
import { IconContainer, StyledIconsContainer } from "./styles";

export interface StyledIconProps {
  variant: "purple" | "light-yellow" | "dark-yellow" | "gray";
  text: string;
  children?: ReactNode;
}

export function StyledIcon({ variant, text, children }: StyledIconProps) {
  return (
    <StyledIconsContainer>
      <IconContainer variant={variant}>{children}</IconContainer>
      <p>{text}</p>
    </StyledIconsContainer>
  );
}
