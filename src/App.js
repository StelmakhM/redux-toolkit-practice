import CartContainer from "./components/CartContainer";
import Navbar from "./components/NavBar";
import { calculateTotals } from "./redux/features/cartSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./components/Modal";

function App() {
	const { cartItems } = useSelector((state) => state.cart);
	const { isOpen } = useSelector((state) => state.modal);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems, dispatch]);

	return (
		<main>
			{isOpen && <Modal />}
			<Navbar />
			<CartContainer />
		</main>
	);
}
export default App;
