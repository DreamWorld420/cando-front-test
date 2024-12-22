"use server";

import { cookies } from "next/headers";

export async function login(token: string) {
	return (await cookies()).set("auth", token, {
		httpOnly: true,
		secure: false,
		path: "/",
		maxAge: 60 * 60 * 24 * 7 * 1000,
	});
}
