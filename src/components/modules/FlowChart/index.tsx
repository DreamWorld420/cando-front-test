"use client";

import { useEffect, useState } from "react";
import { Content } from "antd/es/layout/layout";
import Plot from "react-plotly.js";
import { Services } from "@/services";
import Turbine from "@/components/modules/FlowChart/Turbine";
import Compressor from "@/components/modules/FlowChart/Compressor";
import CombustionChamber from "@/components/modules/FlowChart/CombustionChamber";
import CombustionChamberInput from "@/components/modules/FlowChart/CombustionChamberInput";
import PlotSlot from "@/components/modules/FlowChart/PlotSlot";
import { UserActions, useUserActionStore } from "@/app/stores/UserActionStore";

const FlowChart: React.FC = (props) => {
	const [chartData, setChartData] = useState<any | null>(null);
	const [chartType, setChartType] = useState("");
	const [scatterType, setScatterType] = useState<"line" | "scatter">("line");
	const addUserAction = useUserActionStore((state) => state.addAction);

	const handleInteraction = async (part: string) => {
		try {
			let data = null;

			switch (part) {
				case "compressorInput":
					data = await Services.getLineChartData();
					setChartType("line");

					break;

				case "combustionChamber":
					data = await Services.getBarChartData();
					setChartType("bar");
					addUserAction(UserActions.CHART_VIEWED_BAR);

					break;

				case "turbine":
					data = await Services.getDonutChartData();
					setChartType("donut");
					addUserAction(UserActions.CHART_VIEWED_DONUT);

					break;

				case "combustionChamberInput":
					data = await Services.getRadarChartData();
					setChartType("radar");
					addUserAction(UserActions.CHART_VIEWED_RADAR);

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
								type: scatterType === "line" ? "scatter" : "scatter",
								mode: scatterType === "line" ? "lines" : "markers",
								marker: { color: "blue" },
							},
						]}
						layout={{ title: "Compressor Pressure Output" }}
					/>
				);

			case "donut":
				return (
					<Plot
						data={[
							{
								values: chartData.map((d: any) => d.power),
								labels: chartData.map((d: any) => d.sector),
								type: "pie",
								hole: 0.4,
							},
						]}
						layout={{ title: "Power Usage Per Sector" }}
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

	const handleRadioChange = (e: any) => {
		setScatterType(e.target.value);
		if (scatterType === "scatter") {
			addUserAction(UserActions.CHART_VIEWED_SCATTER);
		} else {
			addUserAction(UserActions.CHART_VIEWED_LINE);
		}
	};

	useEffect(() => {
		handleInteraction("compressorInput");
	}, []);

	return (
		<Content
			style={{
				padding: "128px 48px",
				display: "flex",
				flexDirection: "row",
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
				<div style={{ position: "relative" }}>
					<CombustionChamberInput
						onClick={() => handleInteraction("combustionChamberInput")}
					/>
					<CombustionChamber
						onClick={() => handleInteraction("combustionChamber")}
					/>
				</div>

				{/* Compressor and Turbine */}
				<div
					style={{
						flexDirection: "row",
						display: "flex",
						columnGap: "3.5rem",
					}}
				>
					<Compressor onClick={() => handleInteraction("compressorInput")} />
					<Turbine onClick={() => handleInteraction("turbine")} />
				</div>
			</div>

			<PlotSlot
				chartType={chartType}
				scatterType={scatterType}
				onChartTypeChange={handleRadioChange}
				currentChart={renderChart()}
			/>
		</Content>
	);
};

export default FlowChart;
