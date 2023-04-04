import { useRoutes , Routes} from "react-router-dom";

import {Details} from '../pages/Details'
import {Profile} from '../pages/Profile'
import {Home} from '../pages/Home'
import {New} from '../pages/New'

function AppRoutes (){
    const AppRoute = useRoutes([
        {
            path: '/details/:id',
            element: <Details/>
        },
        {
            path: '/new',
            element: <New/>
        },
        {
            path: '/profile',
            element: <Profile/>
        },
        {
            path: '/',
            element: <Home/>
        }
    ])
    return AppRoute
}

export {AppRoutes} 