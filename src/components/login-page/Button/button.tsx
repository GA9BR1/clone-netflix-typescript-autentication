import React from "react";
import { Container } from "./style";
import {useNavigate} from 'react-router-dom'

type Button = {
    children: React.ReactNode
    onClick: () => Promise<void>
}

export default ({children, onClick}: Button) => {
    return(
        <Container type="button" onClick={onClick}>{children}</Container>
    )
}