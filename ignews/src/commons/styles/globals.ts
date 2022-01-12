import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    @media screen and (max-width: 1080px){
        font-size: 93.75%;
    }

    @media screen and (max-width: 720px){
        font-size: 87.5%;
    }
  }

  body{
    background: ${({ theme }) => theme.colors.gray900};
    color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }

  body, button, textarea, input{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }

`;
