import styled from "styled-components";


export const Container = styled.button`
    width: 100%;
    background: ${({ theme })=> theme.COLORS.ORANGE};
    color: ${({theme})=> theme.COLORS.BACKGROUND_800};

    height: 56px;

    padding: 0px 16px;
    margin-top: 16px;

    border: 0px;
    border-radius: 10px;

    font-weight:500;

    &:disabled{
        opacity: 0.5;
    }
`
 