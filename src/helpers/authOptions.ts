import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            name?: string | null;
            email?: string | null;
            image?: string | null;
        }
    }
    interface User {
        id: string,
        name?: string | null;
        email?: string | null;
        image?: string | null;
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    console.error("Email or password is missing.")
                    return null;
                }
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify({ email: credentials?.email, password: credentials?.password })
                    });
                    if (!res?.ok) {
                        console.error("User Login failed.", await res.text());
                        return null;
                    }
                    const user = await res.json();
                    if (user) {
                        // Any object returned will be saved in `user` property of the JWT
                        return {
                            id: user?.id,
                            email: user?.email,
                            name: user?.name,
                            image: user?.picture,
                        }
                    } else {
                        // If you return null then an error will be displayed advising the user to check their details.
                        return null

                        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                    }
                } catch (error) {
                    console.error(error);
                    return null;
                }


            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user?.id
            }
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.id = token?.id as string;
            }
            return session;
        }
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/login"
    }
}
