"use server";

import { cookies } from "next/headers";

export async function SignInApiRequest(email: string, password: string) {
    const res = await fetch(`${process.env.API_URL}/sign-in`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            getSetCookie: "true",
        },
        body: JSON.stringify({ email: email, password: password }),
        cache: "no-cache",
    });

    if (res.ok) {
        const data = await res.text();

        cookies().set("token", data, { httpOnly: true, secure: true });

        if (data === "success") {
            return "success";
        } else if (data === "already exists") {
            return "already exists";
        }
    } else {
        throw new Error("Failed to sign up");
    }
}
