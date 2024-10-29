import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <h1 className="text-3xl font-black text-violet-700">
        Welcome to the world of Next.js
      </h1>
    </>
  );
}
