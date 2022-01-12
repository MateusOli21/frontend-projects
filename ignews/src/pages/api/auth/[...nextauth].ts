import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';
import { query as q } from 'faunadb';

import { fauna } from '@services/fauna';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  jwt: {
    secret: process.env.SIGN_IN_SECRET,
  },
  callbacks: {
    async session({ session }) {
      try {
        const userHasActiveSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index('subscription_by_user_ref'),
                q.Select(
                  'ref',
                  q.Get(
                    q.Match(
                      q.Index('user_by_email'),
                      q.Casefold(session.user?.email as string)
                    )
                  )
                )
              ),
              q.Match(q.Index('subscription_by_status'), 'active'),
            ])
          )
        );

        return { ...session, activeSubscription: userHasActiveSubscription };
      } catch {
        return { ...session, activeSubscription: null };
      }
    },
    async signIn({ user, account, profile }) {
      const { email } = user;

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(user.email as string)
                )
              )
            ),
            q.Create(q.Collection('users'), { data: { email } }),

            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email as string)
              )
            )
          )
        );

        return true;
      } catch (err) {
        return false;
      }
    },
  },
});
