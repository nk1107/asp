// src/app/actions/authActions.js
"use server";

import { signIn } from "@/auth";

export async function handleSignIn() {
  await signIn("google", { redirectTo: "/dashboard" });
}
