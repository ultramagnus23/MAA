import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const ALLOWED_DOMAIN = "ashoka.edu.in";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      // Asks Google to show only Ashoka accounts. This is a hint only;
      // the real check is in the signIn callback below.
      authorization: { params: { hd: ALLOWED_DOMAIN, prompt: "select_account" } },
    }),
  ],
  pages: { signIn: "/login", error: "/login" },
  session: { strategy: "jwt", maxAge: 60 * 60 * 24 * 7 },
  callbacks: {
    signIn({ account, profile }) {
      if (account?.provider !== "google") return false;
      const email = profile?.email?.toLowerCase() ?? "";
      return (
        profile?.email_verified === true &&
        email.endsWith(`@${ALLOWED_DOMAIN}`) &&
        profile?.hd === ALLOWED_DOMAIN
      );
    },
  },
});
