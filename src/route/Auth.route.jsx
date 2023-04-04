import { useRoutes } from "react-router-dom";

import {SignIn} from '../pages/SignIn'
import {SignUp} from '../pages/SignUp'

function AuthRoutes (){
    const AuthRoute = useRoutes([
        {
            path: '/',
            element: <SignIn/>
        },
        {
            path: '/register',
            element: <SignUp/>
        }
    ])
    return AuthRoute
}

export {AuthRoutes} 