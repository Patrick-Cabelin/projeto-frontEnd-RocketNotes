import styled from "styled-components";


export const Container = styled.button`
    width: 100%;
    background: ${({theme})=> theme.COLORS.BACKGROUND_700};

    border:none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    > h1{
        color: ${({theme})=> theme.COLORS.WHITE};
        text-align: left;

        flex: 1;

        font-size: 24px;
        font-weight: 700;
    }

    >footer{
        display:flex;   
        width: 100%;
        margin-top: 24px;
    }
`