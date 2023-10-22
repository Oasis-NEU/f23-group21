import NextAuth from 'next-auth';
//import Providers from 'next-auth/providers';
import GoogleProvider from 'next-auth/providers/google';


export default nextauth = ({
    providers:[
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            // redirect url?
        }),
    ],
});


