import {createContext , useContext, useState, useEffect} from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData]= useState({})
    async function signIn({email, password}){
      try{
            const response = await api.post('/sessions' ,{email, password})
            const {user , token} = response.data

            api.defaults.headers.common['authorization'] = `Bearer ${token}`
            setData({user , token})

            localStorage.setItem('@RocketNotes:user',JSON.stringify(user))
            localStorage.setItem('@RocketNotes:token',token)
      }catch (error){
        if(error.response){
            alert(error.response.data.message)
        }else{
        alert('Não foi possivel se conectar')}
      }
    }

    function signOut(){
        localStorage.removeItem('@RocketNotes:user')
        localStorage.removeItem('@RocketNotes:token')

        setData({})
    }

    async function UpdateProfile({user, avatarFile}){
       
        if(avatarFile){
            const fileUploadForm= new FormData()
            fileUploadForm.append('avatar',avatarFile)

            const response = await api.patch('/users/avatar', fileUploadForm)
            console.log(response.data)
            user.avatar = response.data.avatar
        }

        try{
          
            await api.put('/users',user)
            localStorage.setItem('@RocketNotes:user',JSON.stringify(user))
            
            setData({user, token: data.token})
            alert('Atualizado com sucesso')
      }catch (error){
        if(error.response){
            alert(error.response.data.message)
        }else{
        alert('Não foi possivel se atualizer perfil')}
      }
    }

    useEffect(()=>{
        const user = localStorage.getItem('@RocketNotes:user')
        const token = localStorage.getItem('@RocketNotes:token')

        if(user && token){
            api.defaults.headers.common['authorization']  = `Bearer ${token}`
          
            setData({
            user: JSON.parse(user),
            token
        })
    }
    },[])

    return(
        <AuthContext.Provider value={
            {
            signIn,
            signOut,
            UpdateProfile,
            user: data.user
            }
            }>
            {children}
        </AuthContext.Provider>
    )
}
function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}