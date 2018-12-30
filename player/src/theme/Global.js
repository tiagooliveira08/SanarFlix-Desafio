import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body,html { 
        font-family: 'Open Sans', sans-serif;
        
    }
    *{
        padding: 0;
        margin: 0; 
        box-sizing: border-box;
    }
    .container { 
        margin : 0 auto;
    }

`;
