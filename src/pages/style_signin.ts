import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    background-color: gray;
`

export const Content = styled.div`
    margin: auto;
`
export const Form = styled.form`
    align-items: center;
    text-align: center;

    @media screen and (min-width: 850px){
        min-width: 20vw;
    }
`


export const H1 = styled.h1`
    font-family: Montserrat, sans-serif;
    text-align: center;
    color: white;
`

export const A = styled.a`
    color: white;
    text-decoration: none;
    font-family: Roboto, sans-serif;
    font-size: 0.9rem;
    display: inline-block;
    margin-top: 8px;

    :hover{
        transition: ease-in-out 0.2s;
        text-shadow: 1px 1px 4px white;
    }
`

