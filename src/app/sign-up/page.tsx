"use client";

import clsx from "clsx";
import * as s from "./page.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { SignUpApiRequest } from "./action";

export default function SignUp() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { pending } = useFormStatus();

    const router = useRouter();

    return (
        <main>
            <div className={clsx(s.main_wrapper)}>
                <h2 className={clsx(s.form_title)}>Sign up</h2>
                <div className={clsx(s.form_wrapper)}>
                    <div className={clsx(s.form)}>
                        <span>
                            <p>Email</p>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </span>
                        <span>
                            <p>Password</p>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </span>
                        <button
                            className={clsx(s.form_button)}
                            type="submit"
                            aria-disabled={pending}
                            onClick={async () => {
                                const res = await SignUpApiRequest(
                                    email,
                                    password
                                );
                                if (res === "success") {
                                    router.push("/sign-in");
                                }
                            }}
                        >
                            submit
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
