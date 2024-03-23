"use server";

import { getAllCookies } from "@/util/getCookie";

export async function GetSpacesApiRequest() {
    const cookie = getAllCookies();
    const res = await fetch(`${process.env.API_URL}/get-spaces`, {
        method: "GET",
        credentials: "include",
        headers: {
            cookie,
        },
    });
    console.log(res.headers);

    if (res.ok) {
        const data = await res.text();

        return data;
    } else {
        return "failed to get spaces";
    }
}
