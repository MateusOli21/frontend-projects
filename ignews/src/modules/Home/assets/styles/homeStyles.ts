import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 5rem);

  .content {
    width: 100%;
    max-width: 1080px;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 6rem;
  }

  img {
    max-width: 360px;
  }
`;

export const Section = styled.section`
  max-width: 540px;

  > span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h1 {
    margin: 3rem 0 1.5rem;
    font-size: 4rem;
    line-height: 100%;

    > span {
      color: ${({ theme }) => theme.colors.cyan500};
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 150%;
    margin-bottom: 1.5rem;

    > span {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.cyan500};
    }
  }

  button {
    padding: 1rem 3rem;
  }
`;
