import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async session({ session, token }) {
            session.user.role = token.email === 'ouosamacute@gmail.com' ? 'admin' : 'user';
            return session;
        },
        async jwt({ token }) {
            token.role = token.email === 'ouosamacute@gmail.com' ? 'admin' : 'user';
            return token;
        }
    }
})

export { handler as GET, handler as POST }