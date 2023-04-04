import styled from "styled-components";
import BackgroundIMG from '../../assets/background.png'
export {Container , Form, Background}

const Container = styled.div`
    height:100vh;

    display: flex;
    align-items: stretch;

`
const Form = styled.form`
    display:flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 0px 136px;

    >h1{
        font-size: 48px;
        color: ${({theme})=> theme.COLORS.ORANGE};
    }
    >h2{
        font-size: 24px;
        
        margin: 48px 0px;
    }
    >p{
        font-size: 14px;
        color: ${({theme})=> theme.COLORS.GRAY_100};
    }

    >a{
        color: ${({theme})=> theme.COLORS.ORANGE};
        margin-top: 124px;
    }
    
`
const Background = styled.div`
    background: url(${BackgroundIMG}), no-repeat center center ;
    background-size:cover;
    flex:1;

`