import styled from "styled-components";


export const Container = styled.div`
    display: grid;

    grid-template-rows: 105px auto;
    grid-template-areas: 
    'header'
    'content';

    .tags{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    >main {
        overflow-y: auto;
        overflow-x: scroll;
        grid-area: content;
    }
    ;
`

export const Form = styled.form`
    max-width: 550px;
    margin: 38px auto;

    > header{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;

    buttom{
        color:${({theme}) => theme.COLORS.GRAY_100};
        font-size: 20px;
    }
    }
`