"use client";

import _ from "lodash";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/header/page";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Nav } from "@/app/utils/reusable";
import { SignUpFormData } from "@/types.ts";
import { SignUpFormSchema } from "./validation";
import { useRouter } from "next/navigation";
import Indicator from "../../../assets/indicator.png";
import Footer from "@/components/footer/page";

const SignUp = () => {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: SignUpFormData) => {
    if (!_.isEmpty(form.formState.errors)) {
      return;
    }

    router.push("/user-profile");
  };

  return (
    <div className="bg-white min-h-screen  relative">
      <Header navText="Get started" />
      <div className="px-5 pt-20 ">
        <div className="grid grid-cols-3 pt-7 pb-5 gap-2">
          <div className="bg-primary-purple   h-1 rounded-[15px]"></div>
          <div className="bg-primary-grey   h-1 rounded-[15px]"></div>
          <div className="bg-primary-grey   h-1 rounded-[15px]"></div>
        </div>
        <div>
          <p className="text-2xl font-medium mb-4">
            Enter your phone number or email to get started
          </p>
          <p className="mb-6 text-sm text-primary-lightblack">
            We will send you a verification code for confirmation
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                        placeholder="Enter phone number or email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Footer footerText="Continue" />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
