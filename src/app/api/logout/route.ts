import { Services } from "@/services";

import { cookies } from "next/headers";

export async function POST(req: Request) {
	(await cookies()).delete("auth");
	return new Response("Logged out", {
		status: 200,
	});
}
