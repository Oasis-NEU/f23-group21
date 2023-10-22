import Google from 'next-auth/providers/google';
import {signIn} from 'next-auth/react';

export function GoogleAuthButton(){
    return( 
        <button>Login with Google</button>
    )
};
