"use client";

import { useEffect, useState } from "react";
import { GetSpacesApiRequest } from "./action";

export default function Home() {
    const [spaces, setSpaces] = useState<string[]>([]);
    useEffect(() => {
        const getspaces = async () => {
            const data: string[] | string = await GetSpacesApiRequest();
            setSpaces(data as unknown as string[]);
        };
        getspaces();
    }, []);
    return <main></main>;
}
