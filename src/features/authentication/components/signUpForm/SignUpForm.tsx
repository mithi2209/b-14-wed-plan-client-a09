


"use client";

import Link from "next/link";

import { toast } from "sonner";

import React, { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";
import {validatePassword,} from "../../validition";

import SignUpHeader from "./SignUpHeader";
import SignUpFields from "./SignUpFields";
import PasswordField from "./PasswordField";
import ProfileImageField from "./ProfileImageField";
import SignUpSubmitButton from "./SignUpSubmitButton";
import GoogleSignInButton from "../GoogleSignInButton";
import { AnimatedItem, FormEntrance } from "./SignUpAnimations";
import { uploadProfileImage } from "@/lib/uploadProfileImage/uploadProfileImage";
import AccountRoleSelector, {type AccountRole,} from "./AccountRoleSelector";




const SignUpForm = () => {

  const router = useRouter();

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<AccountRole>("customer");

  // Profile image states
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Cleanup preview URL
  useEffect(() => {
    return () => {
      if (previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);




  // Handle registration
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (!name.trim() || !email.trim() || !password) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!validatePassword(password)) {
      toast.error("Please meet all password requirements.");
      return;
    }

    try {
      setLoading(true);

      // Upload profile image if a file is selected
      const profileImage = imageFile
        ? await uploadProfileImage(imageFile)
        : imageUrl.trim() || undefined;

      const { error } = await authClient.signUp.email({
        name: name.trim(),
        email: email.trim(),
        password,
        image: profileImage,
        role,
      });


      if (error) {
        throw new Error(error.message || "SignUp failed.");
      }

      toast.success("Your WedPlan account has been created!");

      router.push("/sign-in");
      router.refresh();

    }
     catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      toast.error(message);

    } 
    finally {
      setLoading(false);
    }
  };

  return (

     <FormEntrance>

      <div className="w-full max-w-2xl">

    <AnimatedItem>
      <SignUpHeader />
    </AnimatedItem>

     
      <form onSubmit={handleSignUp} className="space-y-6">

        {/* Name and Email */}
        <AnimatedItem>
          <SignUpFields
            name={name}
            email={email}
            setName={setName}
            setEmail={setEmail}
          />
        </AnimatedItem>

        {/* Password */}
        <AnimatedItem>
          <PasswordField
            password={password}
            setPassword={setPassword}
          />
        </AnimatedItem>

        {/* Profile Image */}
        <AnimatedItem>
          <ProfileImageField
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            imageFile={imageFile}
            setImageFile={setImageFile}
            previewUrl={previewUrl}
            setPreviewUrl={setPreviewUrl}
          />
        </AnimatedItem>

        {/* Role */}
        <AnimatedItem>
          <AccountRoleSelector
            role={role}
            setRole={setRole}
          />
        </AnimatedItem>

        {/* Submit */}
        <div className="space-y-5 pt-1">
          <AnimatedItem>
            <SignUpSubmitButton loading={loading} />
          </AnimatedItem>

           {/* Google Sign In */}
           <AnimatedItem>
            <GoogleSignInButton />
          </AnimatedItem>

        {/* Login link */}
          <p className="text-center text-sm text-[#806C5D] dark:text-[#C5AD99]">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-semibold text-[#A47D56] underline-offset-4 transition-colors hover:text-espresso hover:underline dark:hover:text-ivory"
            >
              Sign In
            </Link>
          </p>
        </div>

      </form>
      
    </div>
    </FormEntrance>
  );
};

export default SignUpForm;
