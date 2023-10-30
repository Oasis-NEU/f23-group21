import { signIn, signOut, useSession } from 'next-auth/react';
import { GoogleAuthButton, GoogleLogout} from '../components/authButtons';


export default function login(){
    return(
        <div className="flex flex-col h-screen items-center justify-center">

            <GoogleLogout></GoogleLogout>
            
            <GoogleAuthButton></GoogleAuthButton>
            
        </div>
    )
};