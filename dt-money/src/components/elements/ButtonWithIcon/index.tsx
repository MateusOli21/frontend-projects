import React from "react";

import { Container } from "./styles";

interface ButtonWithIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: string;
  selected?: boolean;
  activeColor: "green" | "red";
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  text,
  icon,
  selected,
  activeColor,
  ...rest
}) => {
  return (
    <Container activeColor={activeColor} selected={selected} {...rest}>
      <img src={icon} alt={text} />
      {text}
    </Container>
  );
};
