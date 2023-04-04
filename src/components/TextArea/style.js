import styled from "styled-components";


export const Container = styled.textarea`

width: 100%;
height: 150px;

background: ${({theme})=> theme.COLORS.BACKGROUND_900};
color: ${({theme})=> theme.COLORS.WHITE};


padding:16px;
margin-bottom: 8px;

resize: none;

border: none;
border-radius: 10px;

&:placeholder{
    color:${({theme})=> theme.COLORS.GRAY_300};
}

`