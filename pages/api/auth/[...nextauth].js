import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        '968309427353-e7k165s9sggos1ad9ib5avkiu25sihck.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
  secret: 'my-super-secret-key',
  // Configure the session.
  session: {
    jwt: true,
    // The session cookie will have the same name as the provider
    fromExtension: true,
  },
})
