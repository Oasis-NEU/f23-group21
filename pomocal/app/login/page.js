import { signIn, signOut, useSession } from 'next-auth/react';
import { GoogleAuthButton} from '../components/authButtons';


export default function login(){
    return(
        <div>
            <GoogleAuthButton></GoogleAuthButton>
        </div>
    )
};