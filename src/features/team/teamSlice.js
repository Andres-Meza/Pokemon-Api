import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
	name: 'team',
	initialState: {
		members: []
	},

	reducers: {
		addToTeam: (state, action) => {
			console.log(action.payload)
			state.members.push(action.payload)
		},

		removeFromTeam: (state, action) => {
			state.members = state.members.filter(pokemon => pokemon !== action.payload);
		}
	}
})

export const { addToTeam, removeFromTeam } = teamSlice.actions

export default teamSlice.reducer;