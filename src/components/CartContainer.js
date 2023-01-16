import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../redux/features/cartSlice";

export default function CartContainer() {
	const dispatch = useDispatch();
	const { cartItems, amount, total } = useSelector((store) => store.cart);

	const onClearCartClick = () => {
		dispatch(clearCart());
	};

	if (amount < 1) {
		return (
			<section className="cart">
				<header>
					<h2>your bag</h2>
					<h4 className="empty-cart">is currently empty</h4>
				</header>
			</section>
		);
	}

	return (
		<section className="cart">
			<header>
				<h2>your bag</h2>
			</header>
			<div>
				{cartItems.map((item) => {
					return <CartItem key={item.id} {...item} />;
				})}
			</div>
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>$ {total}</span>
					</h4>
				</div>
				<button onClick={onClearCartClick} className="btn clear-btn">
					clear cart
				</button>
			</footer>
		</section>
	);
}