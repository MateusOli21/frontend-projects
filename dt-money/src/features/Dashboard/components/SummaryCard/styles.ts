import styled from "styled-components";

interface ContainerProps {
  altBgColor?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  border-radius: 0.25rem;
  padding: 1.5rem 2rem;
  color: var(--text-title);
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.1);
  background: ${({ altBgColor }) =>
    altBgColor ? "var(--green)" : "var(--shape)"};
  color: ${({ altBgColor }) =>
    altBgColor ? "var(--shape)" : "var(--text-title)"};

  > header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  strong {
    font-size: 2rem;
    font-weight: 500;
    line-height: 100%;
  }
`;
