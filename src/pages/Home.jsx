import React, { useState, useEffect } from "react";
import "./Home.css";
import Vector from "../assets/Vector.svg";
import Scholar from "../assets/scholar.svg";
import TV from "../assets/tv.svg";
import Clock from "../assets/clock.svg";
import Ads from "../assets/ads.svg";
import Razor from "../assets/Razorpay.svg";
import Time from "../assets/time.svg";
import Subscription from "../components/Subscription";

const SUBSCRIPTIONS = [
	{
		name: "subscription1",
		detail: "12 Months Subscription",
		total: 99,
		monthly: 8,
		offerAmount: 9,
		isRecommended: false,
		isOfferExpired: true,
	},
	{
		name: "subscription2",
		detail: "6 Months Subscription",
		total: 179,
		monthly: 15,
		offerAmount: 30,
		isRecommended: true,
		isOfferExpired: false,
	},
	{
		name: "subscription3",
		detail: "3 Months Subscription",
		total: 149,
		monthly: 25,
		offerAmount: 20,
		isRecommended: false,
		isOfferExpired: false,
	},
	{
		name: "subscription4",
		detail: "1 Month Subscription",
		total: 99,
		monthly: 33,
		offerAmount: 10,
		isRecommended: false,
		isOfferExpired: false,
	},
];

const Home = () => {
	const [selectedSubscription, setSelectedSubscription] = useState(
		SUBSCRIPTIONS[1].name
	);
	const [offerAmount, setOfferAmount] = useState(SUBSCRIPTIONS[1].offerAmount);

	useEffect(() => {
		const selected = SUBSCRIPTIONS.find(
			(subscription) => subscription.name === selectedSubscription
		);
		if (selected) {
			setOfferAmount(selected.offerAmount);
		}
	}, [selectedSubscription]);

	const handleSubscriptionSelection = (subscriptionName, amount) => {
		setSelectedSubscription(subscriptionName);
		setOfferAmount(amount);
	};

	const calculateFinalAmount = (total, offer) => {
		return total - offer;
	};

	const getSubscriptionFee = () => {
		const selected = SUBSCRIPTIONS.find(
			(subscription) => subscription.name === selectedSubscription
		);

		if (selected) {
			const finalAmount = calculateFinalAmount(selected.total, offerAmount);
			return `₹${finalAmount}`;
		}

		return "";
	};

	return (
		<>
			<div className="banner-container">
				<div className="banner-left">
					<div className="heading-container">
						<div>
							<h1 className="heading">Access curated courses worth</h1>
						</div>
						<div>
							<h1 className="heading">
								₹ <span className="roboto-head">18,500</span> at just{" "}
								<span className="roboto-head blue">₹ 99</span> per year!
							</h1>
						</div>
					</div>
					<div className="statistics-container">
						<div className="statistics">
							<div className="statistics-content">
								<img src={Vector} alt="" className="statistics-icon" />
								<h3>
									<span className="blue content">100+ </span>
									Job relevant courses
								</h3>
							</div>
							<div className="statistics-content">
								<img src={Clock} alt="" className="statistics-icon" />
								<h3>
									<span className="blue content">20,000+ </span>
									Hours of content
								</h3>
							</div>
							<div className="statistics-content">
								<img src={TV} alt="" className="statistics-icon" />
								<h3>
									<span className="blue content">Exclusive</span>
									Webinar access
								</h3>
							</div>
							<div className="statistics-content">
								<img src={Scholar} alt="" className="statistics-icon" />
								<h3>
									<span className="content">Scholarship worth</span>
									<span className="blue ">₹94,500 </span>
								</h3>
							</div>
							<div className="statistics-content">
								<img src={Ads} alt="" className="statistics-icon" />
								<h3>
									<span className="blue content">Ad Free </span>
									learning experience
								</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="banner-right">
					<div className="form-container">
						<div className="form">
							<div className="login">
								<div className="login-icon">
									<h4>1</h4>
									<p>Sign Up</p>
								</div>
								<div className="login-icon">
									<h4>2</h4>
									<p>Subscribe</p>
								</div>
							</div>
							<h1 className="sub">Select your subscription plan</h1>
							<div className="subscriptions-container">
								<div className="subscriptions">
									{SUBSCRIPTIONS.map((subscription) => (
										<Subscription
											key={subscription.name}
											name={subscription.name}
											detail={subscription.detail}
											total={`₹ ${subscription.total}`}
											monthly={`₹ ${subscription.monthly}`}
											offerAmount={subscription.offerAmount}
											isSelected={subscription.name === selectedSubscription}
											isRecommended={subscription.isRecommended}
											isOfferExpired={subscription.isOfferExpired}
											handleSubscriptionSelection={handleSubscriptionSelection}
										/>
									))}
								</div>
							</div>
							<hr className="break" />
							<div className="total">
								<div className="sub-fee">
									<h3>Subscription Fee</h3>
									<h3 className="amount">
										₹
										{
											SUBSCRIPTIONS.find(
												(subscription) =>
													subscription.name === selectedSubscription
											)?.total
										}
									</h3>
								</div>
								<div className="offer">
									<div className="offer-content">
										<h4>Limited time Offer</h4>
										<div className="offer-time">
											<img src={Time} alt="" className="offer-img" />
											<span>Offer Valid till 25th March 2023</span>
										</div>
									</div>
									<h3 className="offer-applied">
										{offerAmount ? `-₹${offerAmount}` : ""}
									</h3>
								</div>
								<div className="final">
									<div className="final-content">
										<h3>
											Total <span>(Incl of 18% GST)</span>{" "}
										</h3>
										<h3 className="final-amount">{getSubscriptionFee()}</h3>
									</div>
								</div>
							</div>
							<div className="buttons">
								<button className="btn cancel ">Cancel</button>
								<button className="btn pay ">Proceed to Pay</button>
							</div>
							<div className="razor">
								<img src={Razor} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
