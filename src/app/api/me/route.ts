import { Services } from "@/services";

import { cookies } from "next/headers";

export async function GET(req: Request) {
	const authToken = (await cookies()).get("auth")?.value;

	if (!authToken) {
		return new Response("Unauthorized", {
			status: 401,
		});
	}

	try {
		const result = await Services.getMe(authToken);
		return new Response(result, {
			status: 200,
		});
	} catch (error) {
		return new Response("Internal Server Error", {
			status: 500,
		});
	}
}
