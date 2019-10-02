import { createGlobalStyle, ThemeProvider } from "styled-components";
import React from "react";

const theme = {
  primaryColor: "#00FF00",
  secondaryColor: "#FEE466",
  bodyColor: "#282C35"
};

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
      margin:0;
      padding:0;
      box-sizing:inherit;
  }
  
  body {
      box-sizing: border-box;
      font-family: 'IBM Plex Sans', sans-serif;      
  }
`;

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {props.children}
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};
export default Layout;
