import { Radio } from "antd";
import { JSX } from "react";

export interface PlotSlotProps {
	currentChart?: JSX.Element | null;
	chartType: string;
	scatterType: string;
	onChartTypeChange: (e: any) => void;
}

const PlotSlot: React.FC<PlotSlotProps> = (props) => {
	const { chartType, scatterType, onChartTypeChange, currentChart } = props;
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				minWidth: "700px",
			}}
		>
			{chartType === "line" && (
				<Radio.Group
					onChange={onChartTypeChange}
					value={scatterType}
					style={{ marginBottom: "20px" }}
				>
					<Radio value="line">Line Chart</Radio>
					<Radio value="scatter">Scatter Plot</Radio>
				</Radio.Group>
			)}
			{currentChart}
		</div>
	);
};

export default PlotSlot;
