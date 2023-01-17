import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/features/cartSlice";
import { closeModal } from "../redux/features/modalSlice";

export default function Modal() {
	const dispatch = useDispatch();
	return (
		<aside className="modal-container">
			<div className="modal">
				<h4>Remove all items from your shopping cart?</h4>
				<div className="btn-container">
					<button
						onClick={() => {
							dispatch(clearCart());
							dispatch(closeModal());
						}}
						type="button"
						className="btn confirm-btn"
					>
						confirm
					</button>
					<button
						onClick={() => dispatch(closeModal())}
						type="button"
						className="btn clear-btn"
					>
						cancel
					</button>
				</div>
			</div>
		</aside>
	);
}
