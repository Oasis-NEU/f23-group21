import { signIn, signOut, useSession } from 'next-auth/react';
import { GoogleAuthButton} from '../components/authButtons';


export default function login(){
    return(
        <div>
            <GoogleAuthButton></GoogleAuthButton>
            <h1>testing 213</h1>
        </div>
    )
};