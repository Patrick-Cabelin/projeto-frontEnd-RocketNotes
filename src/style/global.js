import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0rem;
        padding: 0rem;
        box-sizing: border-box;
    }

    body{
        background: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme})=> theme.COLORS.WHITE}
    }

    body, a , input, textarea, button{
        font-family: 'Roboto slab', serif
    }
    a{
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 200ms;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }
`