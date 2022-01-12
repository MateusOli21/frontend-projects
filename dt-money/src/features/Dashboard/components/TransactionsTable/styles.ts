import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  overflow-x: auto;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 150%;
    }

    td {
      padding: 1rem 2rem;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.is-income {
        color: var(--green);
      }
      &.is-outcome {
        color: var(--red);
      }
    }
  }
`;
