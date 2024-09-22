/* eslint-disable no-console */

"use client";

import _ from "lodash";
import { usePathname, redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Loading from "@/components/ui/Loading";
import { PRODUCT_ROUTE } from "@/app/config";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const HOCLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [loader, setLoader] = useState(true);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const {
    user: { email },
  } = useAppSelector((state) => state.userState);

  useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  useEffect(() => {
    const emailSession = sessionStorage.getItem("userEmail");

    const sessionData = emailSession ? JSON.parse(emailSession) : null;

    if (sessionData && sessionData.email !== email) {
      router.push("/");
      toast({
        variant: "destructive",
        title: "You are not in session!",
        description:
          "Email does not match the current session. Unauthorized access!",
      });
      return;
    }

    if (!sessionData?.email && PRODUCT_ROUTE.includes(pathname)) {
      sessionStorage.clear();
      router.push("/");
      toast({
        variant: "destructive",
        title: "You are not in session!",
        description: "Unauthorized Page! Redirecting to Login Page...",
      });
    }
  }, []);

  return loader ? (
    <>
      <Toaster />
      <Loading />
    </>
  ) : (
    <div>{children}</div>
  );
};

export default HOCLayout;
