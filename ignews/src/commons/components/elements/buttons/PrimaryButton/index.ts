import styled from 'styled-components';

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray900};
  background: ${({ theme }) => theme.colors.yellow500};
  transition: filter 0.2s ease-in;

  &:hover {
    filter: brightness(0.9);
  }
`;
