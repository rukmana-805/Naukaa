"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "@/lib/auth";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const isAuth = getAuth();

    if (!isAuth) {
      router.replace("/login");
    } else {
      setChecking(false);
    }
  }, []);

  if (checking) {
    return null; // prevents 1 sec flash
  }

  return <>{children}</>;
}