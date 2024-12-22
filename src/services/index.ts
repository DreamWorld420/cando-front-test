import ClientStorage from "@/app/utils/ClientStorage";
import { isServer } from "@/utils/isServer";
import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://localhost:4000/api",
});

axiosInstance.interceptors.request.use((config) => {
	const token = ClientStorage.getToken();
	if (token) {
		config.headers.Authorization = `Token ${token}`;

		if (!isServer()) {
			const token = ClientStorage.getToken();
			if (token) {
				config.headers.Authorization = `Token ${token}`;
			}
		} else {
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

	// Fetch efficiency data for bar chart
	getBarChartData: () =>
		axiosInstance
			.get("/chart/bar")
			.then((res) => res.data)
			.catch((err) => {
				console.error("Error fetching bar chart data:", err);
				throw err;
			}),

	// Fetch power usage data for donut chart
	getDonutChartData: () =>
		axiosInstance
			.get("/chart/donut")
			.then((res) => res.data)
			.catch((err) => {
				console.error("Error fetching donut chart data:", err);
				throw err;
			}),

	// Fetch fuel input data for radar chart
	getRadarChartData: () =>
		axiosInstance
			.get("/chart/radar")
			.then((res) => res.data)
			.catch((err) => {
				console.error("Error fetching radar chart data:", err);
				throw err;
			}),

	// Fetch compressor pressure data for line chart
	getLineChartData: () =>
		axiosInstance
			.get("/chart/line")
			.then((res) => res.data)
			.catch((err) => {
				console.error("Error fetching line chart data:", err);
				throw err;
			}),

	// Fetch turbine performance data for scatter chart
	getScatterChartData: () =>
		axiosInstance
			.get("/chart/scatter")
			.then((res) => res.data)
			.catch((err) => {
				console.error("Error fetching scatter chart data:", err);
				throw err;
			}),
};
