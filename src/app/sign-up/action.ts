"use server";

export async function SignUpApiRequest(email: string, password: string) {
    const res = await fetch(`${process.env.API_URL}/sign-up`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
        next: {
            revalidate: 0,
        },
    });

    if (res.ok) {
        const data = await res.text();
        console.log(data);
        if (data === "success") {
            return "success";
        } else if (data === "already exists") {
            return "already exists";
        }
    } else {
        throw new Error("Failed to sign up");
    }
}
