"use client";

import Google from 'next-auth/providers/google';
import {signIn, signOut} from 'next-auth/react';

export function GoogleAuthButton(){
    const AuthClick = () => {signIn("google")};
    return( 
        //<div className="flex h-screen items-center justify-center">
        <div>
        <button onClick = {AuthClick} className ="bg-white drop-shadow-lg">Login with Google</button>
        </div>
    )
};

export function GoogleLogout(){
    const AuthClick = () => {signOut("google")};
    return(
        <div className="">
            <button onClick = {AuthClick} className = "bg-white drop-shadow-lg">Logout</button>
        </div>
    )
}