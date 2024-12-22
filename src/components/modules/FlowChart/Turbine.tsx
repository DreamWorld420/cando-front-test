"use client";

import { motion } from "framer-motion";

export interface TurbineProps {
	onClick?: () => void;
}

const Turbine: React.FC<TurbineProps> = (props) => {
	const { onClick } = props;
	return (
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
				<line x1="50" y1="20" x2="50" y2="150" stroke="black" strokeWidth="2" />
				<line
					x1="50"
					y1="150"
					x2="200"
					y2="150"
					stroke="black"
					strokeWidth="2"
				/>
			</motion.svg>
			<motion.div
				onClick={onClick}
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
	);
};

export default Turbine;
