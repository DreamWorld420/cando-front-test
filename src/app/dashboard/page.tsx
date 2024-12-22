"use client";

import { Divider, Flex } from "antd";
import { Content } from "antd/es/layout/layout";
import { motion } from "framer-motion";

const DashboardPage = () => {
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
				<div
					style={{
						position: "relative",
					}}
				>
					<motion.svg
						style={{
							position: "absolute",
							right: "50%",
							translateX: "50%",
							rotate: "90deg",
						}}
						variants={{
							hover: {},
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
							stroke-width="2"
						/>
						<motion.circle
							variants={{
								hover: {
									scale: "1.5",
								},
							}}
							style={{
								cursor: "pointer",
							}}
							cx="50"
							cy="50"
							r="5"
							fill="red"
						/>
					</motion.svg>
					<motion.div
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
				<div
					style={{ flexDirection: "row", display: "flex", columnGap: "3.5rem" }}
				>
					<div
						style={{
							position: "relative",
						}}
					>
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
								stroke-width="2"
							/>

							<line
								x1="50"
								y1="150"
								x2="200"
								y2="150"
								stroke="black"
								stroke-width="2"
							/>

							<motion.circle
								variants={{
									hover: {
										scale: "1.5",
									},
								}}
								style={{
									cursor: "pointer",
								}}
								cx="50"
								cy="150"
								r="5"
								fill="red"
							/>
						</motion.svg>

						<motion.svg
							style={{
								position: "absolute",
								right: "50%",
								top: "50%",
								transform: "translate(0%, -50%)",
							}}
							variants={{
								hover: {},
							}}
							whileHover={"hover"}
							width="300"
							height="100"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line
								x1="20"
								y1="50"
								x2="280"
								y2="50"
								stroke="black"
								stroke-width="2"
							/>
							<motion.circle
								variants={{
									hover: {
										scale: "1.5",
									},
								}}
								style={{
									cursor: "pointer",
								}}
								cx="50"
								cy="50"
								r="5"
								fill="red"
							/>
						</motion.svg>

						<motion.div
							whileHover={{ scale: 1.1 }}
							style={{
								position: "relative",
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
					<div
						style={{
							position: "relative",
						}}
					>
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
							variants={{
								hover: {},
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
								stroke-width="2"
							/>

							<line
								x1="50"
								y1="150"
								x2="200"
								y2="150"
								stroke="black"
								stroke-width="2"
							/>

							<motion.circle
								variants={{
									hover: {
										scale: "1.5",
									},
								}}
								style={{
									cursor: "pointer",
								}}
								cx="50"
								cy="150"
								r="5"
								fill="red"
							/>
						</motion.svg>

						<motion.svg
							style={{
								position: "absolute",
								right: "-50%",
								top: "50%",
								transform: "translate(0%, -50%)",
							}}
							variants={{
								hover: {},
							}}
							whileHover={"hover"}
							width="300"
							height="100"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line
								x1="20"
								y1="50"
								x2="280"
								y2="50"
								stroke="black"
								stroke-width="2"
							/>
							<motion.circle
								variants={{
									hover: {
										scale: "1.5",
									},
								}}
								style={{
									cursor: "pointer",
								}}
								cx="250"
								cy="50"
								r="5"
								fill="red"
							/>
						</motion.svg>

						<motion.div
							whileHover={{ scale: 1.1 }}
							style={{
								position: "relative",
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
			<div></div>
		</Content>
	);
};

export default DashboardPage;
