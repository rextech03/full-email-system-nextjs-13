import { UserRole } from "@prisma/client"
import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's data. */
      id: string,
      name: string,
      email: string,
      image: string,
      role: UserRole,
      created_at: string,
    }
  }
}