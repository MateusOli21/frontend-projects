import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1.25rem;

  h1 {
    font-size: 2.5rem;
    line-height: 110%;
    margin-bottom: 0.5rem;
  }

  time {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
