import React, { InputHTMLAttributes, ReactComponentElement } from "react";
import { IconBaseProps } from 'react-icons';
import styled from 'styled-components';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    icon?: React.ComponentType<IconBaseProps>;
}


export default ({icon:Icon, ...rest}:InputProps) => {
    return (
        <Container>
            {Icon && <Icon size={23} color="#fff"/>}
            <input {...rest}/>
        </Container>
    );
}

const Container = styled.div`
    opacity: 0.9;
    background-color: rgba(38, 35, 37, 0.97);
    padding: 16px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    input{
        background: transparent;
        border: 0;
        flex: 1;
        color: white;
        :focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }

        & + div {
        margin-top: 8px;
        }
    }
    svg {
        margin-right: 16px;
    }
    ::placeholder {
        opacity: 0.5;
    }
    :hover {
        opacity: 1;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active{
        box-shadow: 0 0 0 30px rgba(38,35,37,0.98) inset !important;
        -webkit-text-fill-color: white
    }
`;
