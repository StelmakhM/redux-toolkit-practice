import CartContainer from "./components/CartContainer";
import Navbar from "./components/NavBar";
import { calculateTotals, getCartItems } from "./redux/features/cartSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./components/Modal";

function App() {
	const { cartItems, isLoading } = useSelector((state) => state.cart);
	const { isOpen } = useSelector((state) => state.modal);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems, dispatch]);

	useEffect(() => {
		dispatch(getCartItems());
	}, []);

	if (isLoading) {
		return (
			<div className="loading">
				<h1>loading...</h1>
			</div>
		);
	}

	return (
		<main>
			{isOpen && <Modal />}
			<Navbar />
			<CartContainer />
		</main>
	);
}
export default App;
