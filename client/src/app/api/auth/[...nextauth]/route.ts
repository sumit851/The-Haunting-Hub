import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [
    {
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = { id: 1, name: "J Smith", email: "lund.chut@gmail.com" };
});

export { handler as GET, handler as POST };
