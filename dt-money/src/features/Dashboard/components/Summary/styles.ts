import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: -6rem;

  @media screen and (min-width: 640px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
