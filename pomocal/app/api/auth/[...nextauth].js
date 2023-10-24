import NextAuth from 'next-auth';
//import Providers from 'next-auth/providers';
import GoogleProvider from 'next-auth/providers/google';


export const authOptions = ({
    providers:[
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            // redirect url?
        }),
    ],
});

// https://localhost:3000/api/auth/signin
export default NextAuth(authOptions);

