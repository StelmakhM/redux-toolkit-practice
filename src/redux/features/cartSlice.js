import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
	cartItems: [],
	amount: 2,
	total: 0,
	isLoading: true,
};

export const getCartItems = createAsyncThunk(
	"cart/getCartItems",
	async (_, thunkAPI) => {
		try {
			const response = await axios(URL);
			return response.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error);
		}
	}
);

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		clearCart(state) {
			state.cartItems = [];
		},
		removeItem(state, action) {
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== action.payload
			);
		},
		increase(state, action) {
			const targetItem = state.cartItems.find(
				(item) => item.id === action.payload
			);
			targetItem.amount += 1;
		},
		decrease(state, action) {
			const targetItem = state.cartItems.find(
				(item) => item.id === action.payload
			);
			targetItem.amount -= 1;
		},
		calculateTotals(state) {
			state.total = state.cartItems.reduce(
				(acc, item) => acc + item.amount * item.price,
				0
			);
			state.amount = state.cartItems.reduce(
				(acc, item) => acc + item.amount,
				0
			);
		},
	},
	extraReducers: {
		[getCartItems.pending]: (state) => {
			state.isLoading = true;
		},
		[getCartItems.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.cartItems = action.payload;
		},
		[getCartItems.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
	cartSlice.actions;
export default cartSlice.reducer;
