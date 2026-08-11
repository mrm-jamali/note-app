"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn && pathname !== "/login" && pathname !== "/register") {
      router.replace("/login");
    }
  }, [pathname, router]);

  return <>{children}</>;
}