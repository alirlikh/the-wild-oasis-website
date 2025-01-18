import { auth } from "../_lib/auth";

export const metadata = {
  title: "account page",
};

export default async function page() {
  const session = await auth();
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Wellcome {session?.user?.name}
    </h2>
  );
}
