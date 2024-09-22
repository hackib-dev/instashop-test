"use client";

import _ from "lodash";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/header/page";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Footer from "@/components/footer/page";
import { SignUpFormData } from "@/types.ts";
import { SignUpFormSchema } from "./validation";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slice/userService/userService";

const SignUp = () => {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: SignUpFormData) => {
    try {
      if (!_.isEmpty(form.formState.errors)) {
        return;
      }
      sessionStorage.setItem("userEmail", JSON.stringify(data));
      dispatch(setUser(data));
      router.push("/user-profile");
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  return (
    <div className="bg-white min-h-screen relative">
      <Header navText="Get started" />

      <div className="px-5 pt-20">
        <div className="grid grid-cols-3 pt-7 pb-5 gap-2">
          <div className="bg-primary-purple h-1 rounded-[15px]"></div>
          <div className="bg-primary-grey h-1 rounded-[15px]"></div>
          <div className="bg-primary-grey h-1 rounded-[15px]"></div>
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
