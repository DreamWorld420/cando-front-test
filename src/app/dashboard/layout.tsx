import LogoutButton from "@/components/shared/LogoutButton";
import { APP_ROUTES } from "@/constants";
import { Services } from "@/services";
import { Header } from "antd/es/layout/layout";

import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const layout: React.FC<{ children: React.ReactNode }> = async (props) => {
	const authToken = (await cookies()).get("auth")?.value;

	let response = null;

	try {
		if (!authToken) {
			throw new Error("No auth token found");
		}
		response = await Services.getMe(authToken);
	} catch (error) {
		console.error("Error fetching user data:", error);
		redirect(APP_ROUTES.login);
	}

	return (
		<>
			<Header
				style={{
					background: "rgba(0,0,0, 0.1)",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					minWidth: "100%",
				}}
			>
				<nav
					style={{
						display: "flex",
						columnGap: "1rem",
					}}
				>
					<div>
						Hello, <strong>{response?.username}</strong>
					</div>
					<Link href={APP_ROUTES.dashboard}>Home</Link>
					<Link href={APP_ROUTES.actions}>Actions</Link>
				</nav>
				<LogoutButton />
			</Header>
			{props.children}
		</>
	);
};

export default layout;
