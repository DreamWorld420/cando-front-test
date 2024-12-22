"use client";

import { motion } from "framer-motion";

export interface CombustionChamberProps {
	onClick?: () => void;
}

const CombustionChamber: React.FC<CombustionChamberProps> = (props) => {
	const { onClick } = props;
	return (
		<motion.div
			onClick={onClick}
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
	);
};

export default CombustionChamber;
