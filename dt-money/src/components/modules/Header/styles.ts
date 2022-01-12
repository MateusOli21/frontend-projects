import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: var(--blue);
  padding: 0 1rem;

  .content {
    width: 100%;
    max-width: 960px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
  }
`;
