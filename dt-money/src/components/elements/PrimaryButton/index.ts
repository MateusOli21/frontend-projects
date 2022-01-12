import styled from "styled-components";

interface PrimaryButtonProps {
  backgroundColor?: "primary" | "green" | "red";
  fontWeight?: 400 | 500 | 600;
}

const checkButtonBg = (
  colorOption: "primary" | "green" | "red" | undefined
) => {
  if (colorOption === "primary") return "var(--blue-light)";
  if (colorOption === "green") return "var(--green)";
  if (colorOption === "red") return "var(--red)";
  return "var(--blue-light)";
};

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  font-size: 1rem;
  line-height: 100%;
  color: var(--shape);
  background: ${({ backgroundColor }) => checkButtonBg(backgroundColor)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 2rem;
  transition: filter 0.2s ease-in;

  &:hover {
    filter: brightness(0.95);
  }
`;
