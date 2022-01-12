import styled from 'styled-components';

export const StyledLink = styled.a`
  height: 100%;
  color: ${({ theme }) => theme.colors.gray300};
  position: relative;

  line-height: 5rem;
  padding: 0 0.5rem;
  transition: color 0.2s ease-in;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  &.active {
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
  }

  &.active::after {
    content: '';
    width: 100%;
    height: 3px;
    border-radius: 3px 3px 0 0;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.yellow500};
  }
`;
