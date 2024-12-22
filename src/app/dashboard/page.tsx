"use client";

import { useState } from "react";
import { Divider } from "antd";
import { Content } from "antd/es/layout/layout";
import { motion } from "framer-motion";
import Plot from "react-plotly.js";
import { Services } from "@/services";

const DashboardPage = () => {
	const [chartData, setChartData] = useState<any>(null);
	const [chartType, setChartType] = useState("");

	const handleInteraction = async (part: string) => {
		try {
			let data = null;

			switch (part) {
				case "compressorInput":
					data = await Services.getLineChartData();
					setChartType("line");
					break;

				case "combustionChamber":
					data = await Services.getRadarChartData();
					setChartType("radar");
					break;

				case "turbine":
					data = await Services.getBarChartData();
					setChartType("bar");
					break;

				default:
					console.error("Invalid part selected");
					return;
			}

			setChartData(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const renderChart = () => {
		if (!chartData || !chartType) return null;

		switch (chartType) {
			case "line":
				return (
					<Plot
						data={[
							{
								x: chartData.timestamps,
								y: chartData.pressure,
								type: "scatter",
								mode: "lines",
								marker: { color: "blue" },
							},
						]}
						layout={{ title: "Compressor Pressure Output" }}
					/>
				);

			case "radar":
				return (
					<Plot
						data={[
							{
								type: "scatterpolar",
								r: chartData.map((d: any) => d.input),
								theta: chartData.map((d: any) => d.fuel),
								fill: "toself",
							},
						]}
						layout={{
							polar: { radialaxis: { visible: true } },
							title: "Fuel Input Types",
						}}
					/>
				);

			case "bar":
				return (
					<Plot
						data={[
							{
								x: chartData.map((d: any) => d.fuel),
								y: chartData.map((d: any) => d.efficiency),
								type: "bar",
								marker: { color: "orange" },
							},
						]}
						layout={{ title: "Efficiency by Fuel Type" }}
					/>
				);

			default:
				return null;
		}
	};

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
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
				}}
			>
				{/* Combustion Chamber */}
				<div style={{ position: "relative" }}>
					<motion.svg
						style={{
							position: "absolute",
							right: "50%",
							translateX: "50%",
							rotate: "90deg",
						}}
						whileHover={"hover"}
						width="300"
						height="100"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							x1="20"
							y1="50"
							x2="100"
							y2="50"
							stroke="black"
							strokeWidth="2"
						/>
						<motion.circle
							whileHover={{ scale: 1.5 }}
							style={{ cursor: "pointer" }}
							cx="50"
							cy="50"
							r="5"
							fill="red"
						/>
					</motion.svg>
					<motion.div
						onClick={() => handleInteraction("combustionChamber")}
						whileHover={{ scale: 1.1 }}
						style={{
							position: "relative",
							zIndex: 20,
							cursor: "pointer",
						}}
					>
						<p
							style={{
								position: "absolute",
								top: "50%",
								right: "50%",
								transform: "translate(50%, -50%)",
								zIndex: 10,
								color: "white",
								fontSize: "24px",
							}}
						>
							Combustion Chamber
						</p>
						<svg width="200" height="120" xmlns="http://www.w3.org/2000/svg">
							<rect width="200" height="120" fill="blue"></rect>
						</svg>
					</motion.div>
				</div>

				{/* Compressor and Turbine */}
				<div
					style={{
						flexDirection: "row",
						display: "flex",
						columnGap: "3.5rem",
					}}
				>
					{/* Compressor */}
					<div style={{ position: "relative" }}>
						<motion.svg
							width="300"
							height="200"
							style={{
								rotate: "90deg",
								position: "absolute",
								top: "-50%",
							}}
							whileHover={"hover"}
							xmlns="http://www.w3.org/2000/svg"
						>
							<line
								x1="50"
								y1="20"
								x2="50"
								y2="150"
								stroke="black"
								strokeWidth="2"
							/>
							<line
								x1="50"
								y1="150"
								x2="200"
								y2="150"
								stroke="black"
								strokeWidth="2"
							/>
							<motion.circle
								whileHover={{ scale: 1.5 }}
								style={{ cursor: "pointer" }}
								cx="50"
								cy="150"
								r="5"
								fill="red"
							/>
						</motion.svg>
						<motion.div
							onClick={() => handleInteraction("compressorInput")}
							whileHover={{ scale: 1.1 }}
							style={{ position: "relative" }}
						>
							<p
								style={{
									position: "absolute",
									top: "50%",
									right: "50%",
									transform: "translate(50%, -50%)",
									zIndex: 10,
									color: "white",
									fontSize: "24px",
								}}
							>
								Compressor
							</p>
							<svg
								width="300"
								height="200"
								xmlns="http://www.w3.org/2000/svg"
								style={{
									transform: "rotateZ(90deg)",
									cursor: "pointer",
								}}
							>
								<polygon points="30,200 270,200 210,20 90,20" fill="blue" />
							</svg>
						</motion.div>
					</div>

					{/* Turbine */}
					<div style={{ position: "relative" }}>
						<motion.svg
							width="300"
							height="200"
							style={{
								rotate: "90deg",
								position: "absolute",
								top: "-50%",
								transformOrigin: "center",
								rotateX: 180,
							}}
							whileHover={"hover"}
							xmlns="http://www.w3.org/2000/svg"
						>
							<line
								x1="50"
								y1="20"
								x2="50"
								y2="150"
								stroke="black"
								strokeWidth="2"
							/>
							<line
								x1="50"
								y1="150"
								x2="200"
								y2="150"
								stroke="black"
								strokeWidth="2"
							/>
							<motion.circle
								whileHover={{ scale: 1.5 }}
								style={{ cursor: "pointer" }}
								cx="50"
								cy="150"
								r="5"
								fill="red"
							/>
						</motion.svg>
						<motion.div
							onClick={() => handleInteraction("turbine")}
							whileHover={{ scale: 1.1 }}
							style={{ position: "relative" }}
						>
							<p
								style={{
									position: "absolute",
									top: "50%",
									right: "50%",
									transform: "translate(50%, -50%)",
									zIndex: 10,
									color: "white",
									fontSize: "24px",
								}}
							>
								Turbine
							</p>
							<svg
								width="300"
								height="200"
								xmlns="http://www.w3.org/2000/svg"
								style={{
									transform: "rotateZ(90deg)",
									cursor: "pointer",
								}}
							>
								<polygon points="90,200 210,200 270,20 30,20" fill="blue" />
							</svg>
						</motion.div>
					</div>
				</div>
			</div>
			<Divider style={{ margin: "3rem 0" }} />
			{/* Render Chart */}
			<div>{renderChart()}</div>
		</Content>
	);
};

export default DashboardPage;
