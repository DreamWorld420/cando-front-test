"use client";

import { Services } from "@/services";
import { Button, Form, FormProps, Input, Layout } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import { Content } from "antd/es/layout/layout";
import ClientStorage from "../utils/ClientStorage";
import { useFormik } from "formik";
import { login } from "../actions";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/constants";
import { UserActions, useUserActionStore } from "../stores/UserActionStore";

interface FieldType {
	identity?: string;
	password?: string;
}

const LoginPage = () => {
	const router = useRouter();
	const addUserAction = useUserActionStore((state) => state.addAction);
	const { handleSubmit, setFieldValue } = useFormik({
		initialValues: {
			identity: "",
			password: "",
		},
		onSubmit: async (values: FieldType) => {
			try {
				const data = await Services.login(values);
				ClientStorage.setToken(data.token);
				login(data.token);
				router.push(APP_ROUTES.dashboard);
				addUserAction(UserActions.LOGIN);
			} catch (err) {
				console.error(err);
			}
		},
	});

	return (
		<Content
			style={{
				padding: "0 48px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<form onSubmit={handleSubmit}>
				<FormItem
					label="Username"
					name="identity"
					rules={[
						{
							required: true,
							message: "Please provide your username!",
						},
					]}
				>
					<Input onChange={(e) => setFieldValue("identity", e.target.value)} />
				</FormItem>
				<FormItem
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: "Please provide your password!",
						},
					]}
				>
					<Password
						onChange={(e) => setFieldValue("password", e.target.value)}
					/>
				</FormItem>
				<FormItem label={null}>
					<Button type="primary" style={{ width: "100%" }} htmlType="submit">
						Submit
					</Button>
				</FormItem>
			</form>
		</Content>
	);
};

export default LoginPage;
