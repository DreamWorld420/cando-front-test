import ClientStorage from "@/app/utils/ClientStorage";
import { isServer } from "@/utils/isServer";
import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://localhost:4000/api",
});

axiosInstance.interceptors.request.use((config) => {
	const token = ClientStorage.getToken();
	if (token) {
		config.headers.Authorization = token;

		if (!isServer()) {
			const token = ClientStorage.getToken();
			if (token) {
				config.headers.Authorization = `Token ${token}`;
			}
		} else {
			// see: https://github.com/vercel/next.js/issues/49757

			config.headers.Cookie = require("next/headers").headers().get("Cookie");
		}
	}
	return config;
});

export const Services = {
	login: ({ identity, password }: { identity?: string; password?: string }) =>
		axiosInstance
			.post("/auth", { username: identity, password })
			.then((res) => res.data),
};
