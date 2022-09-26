import styled from 'styled-components'

export const Container = styled.button`
    margin: 0;
    width: 100%;
    text-align: center;
    border-radius: 15px;
    border-width: 0px;
    background-color: orange;
    padding: 16px;
    :hover{
        opacity: 0.9;
        transform: scale(1.01);
        transition: ease-in-out 0.2s;
        cursor: pointer;
    }
`