"use client";

import { UserActions, useUserActionStore } from "@/app/stores/UserActionStore";
import { APP_ROUTES } from "@/constants";
import { Button } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";

export interface LogoutButtonProps {}

const LogoutButton: React.FC<LogoutButtonProps> = (props) => {
	const router = useRouter();
	const addUserAction = useUserActionStore((state) => state.addAction);

	return (
		<Button
			onClick={() => {
				axios
					.post("http://localhost:3000/api/logout", {
						withCredentials: true,
					})
					.then(() => {
						localStorage.clear();
						router.push(APP_ROUTES.login);
						addUserAction(UserActions.LOGOUT);
					});
			}}
		>
			Logout
		</Button>
	);
};

export default LogoutButton;
