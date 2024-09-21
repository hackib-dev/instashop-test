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
import { StoreProfileFormData } from "@/types.ts";
import { StoreProfileFormSchema } from "./validation";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/page";
import StoreLogo from "../../../assets/storeLogo.png";

const StoreProfile = () => {
  const form = useForm<StoreProfileFormData>({
    resolver: zodResolver(StoreProfileFormSchema),
    defaultValues: {
      storeName: "",
      storeTagName: "",
      storePhonenumber: "",
      storeEmail: "",
      category: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: StoreProfileFormData) => {
    if (!_.isEmpty(form.formState.errors)) {
      return;
    }

    router.push("/create-product");
  };

  return (
    <div className="bg-white min-h-screen relative">
      <Header navText="Get started" />
      <div className="px-5 pt-20">
        <div className="grid grid-cols-3 pt-7 pb-5 gap-2">
          <div className="bg-primary-purple  w-28 h-1 rounded-[15px]"></div>
          <div className="bg-primary-purple  w-28 h-1 rounded-[15px]"></div>
          <div className="bg-primary-purple  w-28 h-1 rounded-[15px]"></div>
        </div>
        <div>
          <div className="w-full py-4 border border-primary-dark_grey rounded-xl flex flex-col justify-center items-center mb-2">
            <Image src={StoreLogo} width={90} alt="store-logo"></Image>
            <p className="text-xs text-gray-400 mt-3">Upload store logo</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4 pb-32">
                <FormField
                  control={form.control}
                  name="storeName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                          placeholder="Store name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="storeTagName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                          placeholder="Store tag name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="storePhonenumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                          placeholder="Store phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="storeEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                          placeholder="Store email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="text-sm placeholder:text-sm border-primary-dark_grey py-6 rounded-xl placeholder:text-primary-lightblack"
                          placeholder="Category"
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

export default StoreProfile;
