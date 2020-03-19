import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    return (
        <div>
            <h1>Join Login</h1>
            {
                auth.user ? <button onClick={auth.signOut}>Sign out</button> : <button onClick={auth.signInWithGoogle}>Sign in With Google</button>
            }
        </div>
    );
};

export default Login;