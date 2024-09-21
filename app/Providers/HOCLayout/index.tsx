/* eslint-disable no-console */

"use client";

import _ from "lodash";
import { usePathname, redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Loading from "@/components/ui/Loading";
import { getCookie } from "@/app/utils/cookies";
import { DASHBOARD_ROUTE } from "@/app/config";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const HOCLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [loader, setLoader] = useState(true);
  const router = useRouter();
  const ttlCookie = getCookie("ttl") ?? "";
  const dispatch = useAppDispatch();

  const { toast } = useToast();

  useEffect(() => {
    setTimeout(() => setLoader(false), 1500);
  }, []);

  // useEffect(() => {
  //   if (email && !ttlCookie) {
  //     dispatch(logoutUser());
  //     router.push("/login");
  //     toast({
  //       variant: "destructive",
  //       title: "You are not in session!",
  //       description: "Redirecting to Login Page...",
  //     });
  //   } else if (!email && DASHBOARD_ROUTE.includes(pathname)) {
  //     router.push("/login");
  //     toast({
  //       variant: "destructive",
  //       title: "You are not in session!",
  //       description: "Redirecting to Login Page...",
  //     });
  //   }
  // }, []);

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
