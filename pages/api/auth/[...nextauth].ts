import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import berifyDB from '../../../core/db';

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        userId: {
          label: 'uuid',
          type: 'uuid',
          placeholder: '',
        }
      },
      async authorize(credentials, req) {
        if (!credentials || !req) return null;
        if (!credentials.userId) return null;
        const { userId } = credentials;

        const date = new Date();
        const startDate = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes() - 3
        );

        const logingInUser = await berifyDB.vCardUser.findUnique({
          where: { id: userId },
        });
        if (!logingInUser) return null;

        return {
          id: logingInUser.id,
          email: logingInUser.email,
          firstName: logingInUser.firstName,
          lastName: logingInUser.lastName,
          job: logingInUser.job,
          companyName: logingInUser.companyName,
          address: logingInUser.address,
          bio: logingInUser.bio,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: Number(process.env.NEXTAUTH_TOKEN_EXPIRATION),
  },
  jwt: { maxAge: Number(process.env.NEXTAUTH_TOKEN_EXPIRATION) },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {

        const { accessToken, ...rest } = user;
        token.id = user.id;
        token.accessToken = accessToken;
        token.user = rest;
      }

      return token;
    },
    async session({ session, token }) {
      session = {
        user: {
          ...session.user,
        },
        ...token,
        expires: session.expires,
      };
      session.accessToken = token.accessToken;
      delete session['id'];
      delete session['email'];

      return session;
    },
  },
});
