"use client";

import { useUserActionStore } from "@/app/stores/UserActionStore";

const ActionPage = () => {
	const actions = useUserActionStore((state) => state.actions);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				padding: "8rem",
			}}
		>
			<h1
				style={{
					textAlign: "start",
					marginBottom: "2rem",
					minWidth: "700px",
				}}
			>
				User Actions
			</h1>
			<table style={{ borderCollapse: "collapse", minWidth: "700px" }}>
				<thead>
					<tr>
						<th
							style={{
								border: "1px solid black",
								padding: "8px",
							}}
						>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{actions.map((action, index) => (
						<tr key={index}>
							<td
								style={{
									border: "1px solid black",
									padding: "8px",
								}}
							>
								{action}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ActionPage;
