import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
	cartItems,
	amount: 2,
	total: 0,
	isLoading: true,
};
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
});
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
	cartSlice.actions;
export default cartSlice.reducer;
