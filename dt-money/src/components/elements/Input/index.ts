import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 1.25rem;
  border-radius: 0.25rem;
  background: var(--shape);
  border: 1px solid #d7d7d7;
  font-weight: 400;

  &::placeholder {
    color: var(--text-body);
  }
`;
