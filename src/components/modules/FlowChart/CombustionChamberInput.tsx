"use client";
import { motion } from "framer-motion";

export interface CombustionChamberInputProps {
	onClick?: () => void;
}

const CombustionChamberInput: React.FC<CombustionChamberInputProps> = (
	props
) => {
	const { onClick } = props;
	return (
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
			<line x1="20" y1="50" x2="100" y2="50" stroke="black" strokeWidth="2" />
			<motion.circle
				whileHover={{ scale: 1.5 }}
				style={{ cursor: "pointer" }}
				cx="50"
				cy="50"
				r="5"
				fill="red"
				onClick={onClick}
			/>
		</motion.svg>
	);
};

export default CombustionChamberInput;
