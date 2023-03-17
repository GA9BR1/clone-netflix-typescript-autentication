import React, { useContext, useState } from 'react';
import { Container, Content, H1, Form, A } from './style_signin'
import Input from '../components/login-page/Input/input'
import Button from '../components/login-page/Button/button'
import {FiMail, FiLock} from 'react-icons/fi'
import { AuthContext } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'




const Signin = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if(email && password) {
            console.log(email)
            console.log(password)
            try {
                await auth.authenticate(email, password)
                navigate('/home')
            
            } catch {
                alert("Email ou senha inválido")
            }
        }
        
    }


    return (
    <Container>
        <Content>
            <Form>
                <H1>Faça seu Login</H1>
                <Input
                 icon={FiMail}
                 placeholder='E-mail'
                 type='email' 
                 onChange={e => setEmail(e.target.value)} value={email}/>
                <br></br>
                <Input 
                icon={FiLock} 
                placeholder='Senha' 
                type='password' 
                onChange={e => setPassword(e.target.value)} value={password}/>
                <br></br>
                <Button onClick={handleLogin}>ENTRAR</Button>
                <A href='#'>Esqueci minha senha</A>
            </Form>
        </Content>
    </Container>
    )
}


export default Signin;