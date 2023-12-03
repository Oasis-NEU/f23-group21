import { signIn, signOut, useSession } from 'next-auth/react';
import { GoogleAuthButton} from '../components/authButtons';
import { SessionProvider } from 'next-auth/react';



export default function login(){
    return(
        <div>
            <GoogleAuthButton />
        </div>
    )
};