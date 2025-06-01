import { isAuthenticated } from "@/lib/actions/auth.actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserauthentiacted = await isAuthenticated();
  if (!isUserauthentiacted) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">Mock up Interview Bot</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
