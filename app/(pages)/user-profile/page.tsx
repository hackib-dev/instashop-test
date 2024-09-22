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
import { UserProfileFormData } from "@/types.ts";
import { UserProfileFormSchema } from "./validation";
import { useRouter } from "next/navigation";
import Indicator from "../../../assets/indicator.png";
import Footer from "@/components/footer/page";
import Instagram from "../../../assets/instagram.png";
import Tiktok from "../../../assets/tiktok.png";
import Google from "../../../assets/google.png";

const UserProfile = () => {
  const form = useForm<UserProfileFormData>({
    resolver: zodResolver(UserProfileFormSchema),
    defaultValues: {
      fullname: "",
      username: "",
      phonenumber: "",
      email: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: UserProfileFormData) => {
    if (!_.isEmpty(form.formState.errors)) {
      return;
    }

    router.push("/store-profile");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <Header navText="Get started" />
      <div className="px-5 pt-20">
        <div className="grid grid-cols-3 pt-7 pb-5 gap-2">
          <div className="bg-primary-purple   h-1 rounded-[15px]"></div>
          <div className="bg-primary-purple   h-1 rounded-[15px]"></div>
          <div className="bg-primary-grey   h-1 rounded-[15px]"></div>
        </div>
        <div>
          <p className="text-2xl font-medium mb-4">Complete profile setup</p>
          <p className="mb-6 text-sm text-primary-lightblack">
            Connect your socials for quick setup
          </p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-primary-light_grey rounded-xl py-4 px-10">
              <Image src={Instagram} alt="instagram" width={24}></Image>
            </div>
            <div className="bg-primary-light_grey rounded-xl py-4 px-10">
              <Image src={Tiktok} alt="instagram" width={24}></Image>
            </div>
            <div className="bg-primary-light_grey rounded-xl py-4 px-10">
              <Image src={Google} alt="instagram" width={24}></Image>
            </div>
          </div>
          <p className="mb-6 text-sm text-primary-lightblack">
            Or enter manually
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4 pb-32">
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                          placeholder="Full name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                          placeholder="Username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phonenumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                          placeholder="Phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Footer footerText="Continue" />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
