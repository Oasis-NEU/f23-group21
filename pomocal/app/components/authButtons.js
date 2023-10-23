"use client";

import Google from 'next-auth/providers/google';
import {signIn} from 'next-auth/react';

export function GoogleAuthButton(){
    const AuthClick = () => {signIn("google")};
    return( 
        <button onClick = {AuthClick}>Login with Google</button>
    )
};
