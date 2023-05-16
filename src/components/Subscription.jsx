import React from "react";
import { TiTick } from "react-icons/ti";
import "./Subscription.css";

const Subscription = (props) => {
	const handleSubscriptionClick = () => {
		if (!props.isOfferExpired) {
			props.handleSubscriptionSelection(props.name, props.offerAmount);
		}
	};

	return (
		<div
			className={`subscription ${props.isSelected ? "selected" : ""} ${
				props.isOfferExpired ? "expired" : ""
			}`}
			onClick={handleSubscriptionClick}
		>
			{props.isOfferExpired && (
				<div className="offer-expired-label">Offer Expired</div>
			)}
			{props.isRecommended && (
				<div className="recommended-label">Recommended</div>
			)}
			<div className="info">
				<input
					type="radio"
					className="radio-input"
					name="subscription"
					checked={props.isSelected ? "checked" : ""}
					readOnly
				/>
				<label className="label">
					{props.isSelected && <TiTick className="tick-icon" />}
					{props.detail}
				</label>
			</div>
			<div className="price">
				<label className="price">
					<span className="fade">Total</span> {props.total}
				</label>
				<br />
				<label className="price">
					{props.monthly} <span className="fade">/mo</span>
				</label>
			</div>
		</div>
	);
};

export default Subscription;
