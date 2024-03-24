"use client";

import React, { useEffect, useState } from "react";
import { GetSpacesApiRequest } from "./action";
import { Space } from "./type";

import * as s from "./page.css";
import clsx from "clsx";
import { GoPlus } from "react-icons/go";
import { useRouter } from "next/navigation";

// spacesがない場合
const IsNotSpaces = () => {
    return (
        <div>
            <h2>Spaces is not found.</h2>
            <button className={clsx(s.add_spaces_button)}>
                Add space
                <GoPlus />
            </button>
        </div>
    );
};

// spacesがある場合
const IsSpaces = ({ spaces }: { spaces: Space[] }) => {
    return (
        <div>
            {spaces.map((e) => {
                return (
                    <div key={e.id}>
                        <h2>{e.title}</h2>
                        <p>{e.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default function Home() {
    // routerの設定
    const router = useRouter();

    // spacesのstate
    const [spaces, setSpaces] = useState<Space[]>([]);

    // spacesの取得
    useEffect(() => {
        const getspaces = async () => {
            const data: Space[] | string = await GetSpacesApiRequest();
            if (data === "failed to get spaces") {
                // サインインページにリダイレクト
                router.push("/sign-in");
            } else {
                if (Array.isArray(data)) {
                    setSpaces(data);
                }
            }
        };
        getspaces();
    }, []);

    return (
        <main>
            <div className={clsx(s.center)}>
                <div className={clsx(s.wrapper)}>
                    {spaces.length === 0 ? (
                        // spacesがない場合
                        <IsNotSpaces />
                    ) : (
                        // spacesがある場合
                        <IsSpaces spaces={spaces} />
                    )}
                </div>
            </div>
        </main>
    );
}
