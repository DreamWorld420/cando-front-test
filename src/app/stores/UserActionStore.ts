import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export enum UserActions {
	CHART_VIEWED_LINE = "CHART_VIEWED_LINE",
	CHART_VIEWED_BAR = "CHART_VIEWED_BAR",
	CHART_VIEWED_DONUT = "CHART_VIEWED_DONUT",
	CHART_VIEWED_RADAR = "CHART_VIEWED_RADAR",
	CHART_VIEWED_SCATTER = "CHART_VIEWED_SCATTER",
	LOGIN = "LOGIN",
	LOGOUT = "LOGOUT",
}

interface UserActionState {
	actions: UserActions[];
	addAction: (action: UserActions) => void;
}

export const useUserActionStore = create<UserActionState>()(
	persist(
		(set, get) => ({
			actions: [],
			addAction: (action: UserActions) => {
				const currentActions = get().actions;
				const updatedActions = [action, ...currentActions].slice(0, 10);
				set({ actions: updatedActions });
			},
		}),
		{
			name: "user-actions-storage",
			storage: createJSONStorage(() => localStorage),
		}
	)
);
