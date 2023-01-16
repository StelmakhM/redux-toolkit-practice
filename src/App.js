import CartContainer from "./components/CartContainer";
import Navbar from "./components/NavBar";
import { calculateTotals } from "./redux/features/cartSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems, dispatch]);

	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
}
export default App;
