import styled from 'styled-components';

export const Container = styled.a`
  padding: 1.5rem 0;
  cursor: pointer;

  & + a {
    border-top: 1px solid ${({ theme }) => theme.colors.gray700};
  }

  &:hover {
    strong {
      color: ${({ theme }) => theme.colors.yellow500};
    }
  }

  strong {
    display: block;
    font-size: 1.5rem;
    margin: 1rem 0;
    transition: color 0.2s ease-in;
  }

  p {
    line-height: 150%;
    color: ${({ theme }) => theme.colors.gray100};
  }

  time {
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
