import styled from "styled-components";
import { transparentize } from "polished";

interface ContainerProps {
  selected?: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  line-height: 100%;
  padding: 0.5rem 2rem;
  border-radius: 0.25rem;
  border: 1px solid #dddddd;
  color: var(--text-title);
  background: var(--shape);
  transition: filter 0.2s ease-in;
  background: ${({ selected, activeColor }) =>
    selected ? transparentize(0.9, colors[activeColor]) : "var(--shape)"};

  &:hover {
    filter: brightness(0.95);
  }

  img {
    max-width: 3rem;
  }
`;
