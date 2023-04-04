import { Container, Form, Background } from "./style";

import { FiMail,FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'


import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignUp(){
    return(
    <Container>
        <Background/>

        <Form>
            <h1>RocketNote</h1>
            <p>Uma aplicação para salvar seus links</p>

            <h2>Crie sua conta</h2>

            <Input type= 'Text' icon={FiUser} placeholder='Nome'/>
            <Input type= 'Text' icon={FiMail} placeholder='E-mail'/>
                
            <Input type='password' icon={FiLock} placeholder='Senha'/>
            <Button title='Cadastrar'/>

            <Link to ='/'>Voltar para o login</Link>
        </Form>
    </Container>
    )
}