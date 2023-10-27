import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


export const authOptions = ({
    providers:[
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
        }),
    ],
});

// https://localhost:3000/api/auth/signin
// https://localhost:3000/api/auth/callback/google -> sign in 

export default NextAuth(authOptions);

