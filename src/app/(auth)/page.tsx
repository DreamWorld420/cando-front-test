"use client";

import { Services } from "@/services";
import { Button, Form, FormProps, Input, Layout } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import { Content } from "antd/es/layout/layout";
import ClientStorage from "../utils/ClientStorage";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

interface FieldType {
	identity?: string;
	password?: string;
}

const LoginPage = () => {
	const router = useRouter();
	const { handleSubmit, setFieldValue } = useFormik({
		initialValues: {
			identity: "",
			password: "",
		},
		onSubmit: async (values: FieldType) => {
			try {
				const { data } = await Services.login(values);
				ClientStorage.setToken(data.token);
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
					label="Email"
					name="identity"
					rules={[
						{
							required: true,
							message: "Please provide your email!",
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
