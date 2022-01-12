import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  > h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    & + input {
      margin-top: 0.75rem;
    }
  }

  button {
    margin-top: 1.25rem;
  }

  .button-wrapper {
    display: flex;
    gap: 0.5rem;

    > button {
      width: 100%;
    }
  }
`;
