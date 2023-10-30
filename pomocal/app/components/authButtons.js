"use client";

import Google from 'next-auth/providers/google';
import {signIn} from 'next-auth/react';

export function GoogleAuthButton(){
    const AuthClick = () => {signIn("google")};
    return( 
        <div className="flex h-screen items-center justify-center">
            <button onClick = {AuthClick} className ="px-4 py-2 border flex gap-2 bg-white border-slate-200 dark:border-slate-700 rounded-lg">
                <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg"></img>
                <span>Login with Google</span>
            </button>
            
        </div>
    )
};
