import React from "react";
import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../redux/features/cartSlice";

export default function CartItem({ id, title, price, img, amount }) {
	const dispatch = useDispatch();

	const increaseAmount = (id) => {
		dispatch(increase(id));
	};
	const decreaseAmount = () => {
		dispatch(decrease(id));
	};
	const deleteItem = (id) => {
		dispatch(removeItem(id));
	};
	return (
		<article className="cart-item">
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className="item-price">$ {price}</h4>
				<button onClick={() => deleteItem(id)} className="remove-btn">
					remove
				</button>
			</div>
			<div>
				<button
					onClick={() => increaseAmount(id)}
					className="amount-btn"
				>
					<ChevronUp />
				</button>
				<p className="amount">{amount}</p>
				<button
					onClick={() => {
						if (amount === 1) {
							deleteItem(id);
							return;
						}
						decreaseAmount(id);
					}}
					className="amount-btn"
				>
					<ChevronDown />
				</button>
			</div>
		</article>
	);
}
