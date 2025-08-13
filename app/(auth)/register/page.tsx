/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export const dynamic = "force-dynamic"; // Prevents static prerendering

import AuthLayout from "@/components/layouts/AuthLayout";
import AppHeading from "@/components/texts/Headings";
import { HeadingType, TextInputType } from "@/types/enum";
import { useRouter } from "next/navigation";
import { FaGoogle, FaFacebook, FaRobot } from "react-icons/fa";
import AppInput from "@/components/inputs/AppInput";
import { Controller } from "react-hook-form";
import useCustomForm from "@/hooks/useCustomForm";
import toast from "react-hot-toast";
import { RegistrationValidationSchema } from "@/types/validationSchema";
import apiInterceptors from "@/utils/api.interceptors";
import z from "zod";
import { CiMail, CiLock } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import SocialLoginButtons from "@/components/authentication/socialButton";

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const router = useRouter();

  const handleFormSubmit = async (
    data: z.infer<typeof RegistrationValidationSchema>
  ) => {
    try {
      toast.loading("Submitting...");
      const response = await apiInterceptors.post("/api/auth/signup", data);
      console.log(response);
      toast.dismiss();
      toast.success("Registration Successful");
    } catch (error: any) {
      toast.dismiss();
      toast.error(error.response?.data?.message || "Registration Failed");
    }
  };

  const SocialMedia = [
    {
      icon: <FaGoogle className="text-[#DB4437] text-xl" />,
      text: "Continue with Google",
      link: "/auth/google",
    },
    {
      icon: <FaFacebook className="text-[#1877F2] text-xl" />,
      text: "Continue with Facebook",
      link: "/auth/facebook",
    },
  ];

  const { control, handleSubmit, getFieldError } =
    useCustomForm<SignUpFormData>({
      defaultValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: RegistrationValidationSchema,
      onSubmit: handleFormSubmit,
    });

  return (
    <AuthLayout>
      <div className="flex flex-col items-start max-w-lg mx-auto gap-4">
        <AppHeading text="Create new account" type={HeadingType.MAIN} />
        <p className="text-gray-500 mb-6">
          Get started to access this application with a 30days trial
        </p>

        {/* Social logins */}
        <div className="flex flex-wrap gap-4">
          {SocialMedia.map((item, index) => (
            <SocialLoginButtons
              key={index}
              icon={<span>{item.icon}</span>}
              text={item.text}
              link={item.link}
            />
          ))}
        </div>

        {/* Sign-up form */}
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-6 w-full"
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <AppInput
                type={TextInputType.EMAIL}
                {...field}
                error={getFieldError("email")}
                placeholder="Enter your email address"
                topLabel="Email address"
                leftIcon={CiMail}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <AppInput
                type={TextInputType.PASSWORD}
                {...field}
                error={getFieldError("password")}
                placeholder="Insert your password"
                topLabel="Create Password"
                leftIcon={CiLock}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <AppInput
                type={TextInputType.PASSWORD}
                {...field}
                error={getFieldError("confirmPassword")}
                placeholder="Retype your password"
                topLabel="Confirm Password"
                leftIcon={CiLock}
              />
            )}
          />

          {/* Robot checkbox */}
          <div className="w-full flex gap-2 items-center">
            <input type="checkbox" className="w-4 h-4" />
            <span className="font-medium">I am not a Robot </span>
            <FaRobot className="text-primary-black text-xl" />
          </div>

          {/* Submit button */}
          <div className="w-full flex items-center justify-center">
            <Button variant="primary" className="w-[80%]" disabled={false}>
              Create Account
            </Button>
          </div>

          {/* Login link */}
          <p className="text-sm text-primary-blackLight mx-auto">
            Already have an account?{" "}
            <span
              className="text-primary cursor-pointer font-semibold"
              onClick={() => router.push("/login")}
            >
              Login here
            </span>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
}
