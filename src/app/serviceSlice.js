import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getServices = createAsyncThunk(
	'[Services] getServices',
	async () =>
		await fetch('http://localhost:3000/serviceList').then((resp) => resp.json())
);

const serviceSlice = createSlice({
	name: '[Services] services',
	initialState: {
		services: [],
		loading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getServices.pending, (state) => {
				state.loading = true;
			})
			.addCase(getServices.fulfilled, (state, action) => {
				state.loading = false;
				state.services = action.payload;
			})
			.addCase(getServices.rejected, (state) => {
				state.loading = false;
			});
	},
});

export default serviceSlice.reducer;