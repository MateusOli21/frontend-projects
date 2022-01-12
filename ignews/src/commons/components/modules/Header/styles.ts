import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray700};

  .content {
    width: 100%;
    max-width: 1080px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .header-links {
    display: flex;
    gap: 4rem;
    height: 100%;

    img {
      align-self: center;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  height: 100%;
`;
