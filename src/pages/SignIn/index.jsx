import { Container, Form, Background } from "./style";

import { FiMail,FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth'

export function SignIn(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {signIn} = useAuth()
    
    function handleSignIn(){
        signIn({email ,password})
    }


    return(
    <Container>
        <Form>
            <h1>RocketNote</h1>
            <p>Uma aplicação para salvar seus links</p>

            <h2>Faça seu login</h2>

            <Input type= 'Text' icon={FiMail} placeholder='E-mail' 
            onChange={e => setEmail(e.target.value)}/>
                
            <Input type='password' icon={FiLock} placeholder='Senha'
             onChange={e => setPassword(e.target.value)}/>
            <Button title='Entrar' onClick={handleSignIn} />

            <Link to= '/register'>Criar conta</Link>
        </Form>
        <Background/>
    </Container>
    )
}