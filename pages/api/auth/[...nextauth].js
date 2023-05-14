import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
const GOOGLE_ID =
  '206308346493-00lngcdfgf8vpfvk6sd2ukths6danvnd.apps.googleusercontent.com';
const GOOGLE_SECRET = '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';
import GoogleProvider from 'next-auth/providers/google';
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
  ],
});
