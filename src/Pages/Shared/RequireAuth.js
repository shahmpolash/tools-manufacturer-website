import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading) {
        return <h2 className='container w-50 mx-auto'>Loading...</h2>
    }
    
    if(!user){
        return <Navigate to='/login' state={{form: location}} replace></Navigate>
    }
    return children;
    
};

export default RequireAuth;