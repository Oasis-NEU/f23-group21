"use client";

import Google from 'next-auth/providers/google';
import {signIn} from 'next-auth/react';

export function GoogleAuthButton(){
    const AuthClick = () => {signIn("google")};
    return( 
        <div className="flex h-screen items-center justify-center">
        <button onClick = {AuthClick} className ="bg-white drop-shadow-lg">Login with Google</button>
        </div>
    )
};
