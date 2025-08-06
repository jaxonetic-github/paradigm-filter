import NextAuth from "next-auth"
// import { Auth0Client } from "@auth0/nextjs-auth0/server";
//import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Auth0 from "next-auth/providers/auth0"
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import type { NextAuthConfig } from "next-auth"

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const authConfig = { providers: [Auth0,Google], debug: true,
callbacks: {
  signIn({ profile }) {
    console.log("Within Signin Authcallback-",profile);
    return (profile?.email.length>5)
  }
}
 } satisfies NextAuthConfig

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)

