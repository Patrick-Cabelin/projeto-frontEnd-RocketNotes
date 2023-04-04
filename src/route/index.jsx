import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './App.route'
import { AuthRoutes } from './Auth.route'
import { useAuth } from '../hooks/auth'

function Routes(){
    const {user} = useAuth()
    return (
        <BrowserRouter>
            {user ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}

export {Routes}