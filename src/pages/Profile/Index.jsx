import { Container,Form, Avatar } from "./style";
import {FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'


export function Profile(){
    const { user, UpdateProfile } = useAuth()
    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

  
    const [name,setName] = useState(user.name)
    const [email,setEmail] = useState(user.email)
    const [oldPassword,setOldPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')

    const avatarURL = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarURL)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate(){  
        const updated = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword,
        }
        
        const userUpdated = Object.assign(user, updated)
        console.log(userUpdated)
        await UpdateProfile({user: userUpdated, avatarFile})
    }
    
    function handleAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }
    return(
        <Container>

            <header>
                <button type='button' onClick={handleBack}>
                    <FiArrowLeft/>
                </button>
            </header>
        
            <Form>

                <Avatar>
                    <img src={avatar} alt="Foto do usuário"
                    />
                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input type="file" id="avatar"  onChange={handleAvatar} />
                    </label>
                </Avatar>

                <Input type= 'text' placeholder= 'Nome' icon={FiUser} value={name} 
                onChange={e => setName(e.target.value)}/>
                <Input type= 'text' placeholder= 'E-mail' icon={FiMail} value={email} 
                onChange={e => setEmail(e.target.value)}/>
                <Input type='password' placeholder='Senha atual' icon={FiLock} 
                onChange={e => setOldPassword(e.target.value)}/>
                <Input type='password' placeholder='Nova senha' icon={FiLock} 
                onChange={e => setNewPassword(e.target.value)}/>

                <Button title='Salvar' 
                onClick={handleUpdate}
                />
            </Form>

        </Container>
    )
}