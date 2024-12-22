import ClientStorage from "@/app/utils/ClientStorage";
import { isServer } from "@/utils/isServer";
import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://localhost:4000/api",
});

axiosInstance.interceptors.request.use((config) => {
	if (!isServer()) {
		const token = ClientStorage.getToken();
		if (token) {
			config.headers.Authorization = `Token ${token}`;
		}
	}

	return config;
});

export const Services = {
	login: ({ identity, password }: { identity?: string; password?: string }) =>
		axiosInstance
			.post("/auth", { username: identity, password })
			.then((res) => res.data),

	getMe: (token: string) => {
		return axiosInstance
			.get("/me", {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => res.data);
	},

	getBarChartData: () =>
		axiosInstance
			.get("/chart/bar")
			.then((res) => res.data)
			.catch((err) => {
				console.error("Error fetching bar chart data:", err);
				throw err;
			}),

	getDonutChartData: () =>
		axiosInstance
			.get("/chart/donut")
			.then((res) => res.data)
			.catch((err) => {
				console.error("Error fetching donut chart data:", err);
				throw err;
			}),

	getRadarChartData: () =>
		axiosInstance
			.get("/chart/radar")
			.then((res) => res.data)
			.catch((err) => {
				console.error("Error fetching radar chart data:", err);
				throw err;
			}),

	getLineChartData: () =>
		axiosInstance
			.get("/chart/line")
			.then((res) => res.data)
			.catch((err) => {
				console.error("Error fetching line chart data:", err);
				throw err;
			}),

	getScatterChartData: () =>
		axiosInstance
			.get("/chart/scatter")
			.then((res) => res.data)
			.catch((err) => {
				console.error("Error fetching scatter chart data:", err);
				throw err;
			}),
};
