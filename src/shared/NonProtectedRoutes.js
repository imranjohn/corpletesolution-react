import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {AuthGuard} from "./Auth";



const NonProtectedRoutes = ({component: Component, ...rest}) => {

    return (
        <Route {...rest} render={props => (
            !AuthGuard() ? (<Component {...props} />): (<Redirect to={{pathname: '/dashboard'}} />)
        )} />
    );
};

export default NonProtectedRoutes;