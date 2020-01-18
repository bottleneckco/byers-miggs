import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${props => props.theme.sansSerif};
    font-size: 20px;

    @media (max-width: ${props => props.theme.breakMedium}) {
      font-size: 16px;
    }
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.black};
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0 0;
  }

  h1 {
    margin-top: 2.5rem;
    font-size: 2.441rem;
  }

  h2 {
    margin-top: 2rem;
    font-size: 1.953rem;
  }

  h3 {
    margin-top: 1.6rem;
    font-size: 1.563rem;
  }

  h4 {
    margin-top: 1.28rem;
    font-size: 1.25rem;
  }

  h5 {
    margin-top: 1.024rem;
    font-size: 1rem;
  }

  h6 {
    font-size: 1rem;
    font-variant: small-caps;
  }

  p {
    margin: 0.5rem 0 1rem;
    line-height: 1.5;
  }

  a {
    color: ${props => props.theme.black};
    text-decoration: none;
  }
`;

export default GlobalStyle;
