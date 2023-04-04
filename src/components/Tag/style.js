import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    border-radius: 5px;

    margin-right: 6px;
    padding: 5px 14px;
    
    color: ${ ({theme})=> theme.COLORS.BACKGROUND_900 };
    background: ${({theme})=> theme.COLORS.ORANGE};

`