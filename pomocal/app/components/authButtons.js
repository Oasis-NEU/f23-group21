import Google from 'next-auth/providers/google';
import {signIn} from 'next-auth/react';

export function GoogleAuthButton(){
    return( 
        <div className="flex h-screen items-center justify-center">
        <button className="bg-white drop-shadow-lg">Login with Google</button>
        </div>
    )
};
