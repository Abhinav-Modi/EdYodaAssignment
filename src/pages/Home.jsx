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
const Home = () => {
	const [selectedSubscription, setSelectedSubscription] =
		useState("subscription2");
	const [offerAmount, setOfferAmount] = useState(0);
	useEffect(() => {
		const initialOfferAmount = getOfferAmount(selectedSubscription);
		setOfferAmount(initialOfferAmount);
	}, [selectedSubscription]);

	const getOfferAmount = (subscriptionName) => {
		const offerAmounts = {
			subscription1: 9,
			subscription2: 30,
			subscription3: 20,
			subscription4: 10,
		};
		return offerAmounts[subscriptionName] || 0;
	};
	const handleSubscriptionSelection = (subscriptionName, amount) => {
		setSelectedSubscription(subscriptionName);
		setOfferAmount(amount);
	};
	const calculateFinalAmount = (total, offer) => {
		return total - offer;
	};

	const getSubscriptionFee = () => {
		let fee;
		if (selectedSubscription === "subscription1") {
			fee = 99;
		} else if (selectedSubscription === "subscription2") {
			fee = 179;
		} else if (selectedSubscription === "subscription3") {
			fee = 149;
		} else if (selectedSubscription === "subscription4") {
			fee = 99;
		}

		const finalAmount = calculateFinalAmount(fee, offerAmount);

		return `₹${finalAmount}`;
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
									<Subscription
										detail="12 Months Subscription"
										total="₹ 99"
										monthly="₹ 8"
										offerAmount={9}
										name="subscription1"
										isSelected={selectedSubscription === "subscription1"}
										handleSubscriptionSelection={handleSubscriptionSelection}
										isOfferExpired={true}
									/>

									<Subscription
										detail="6 Months Subscription"
										total="₹ 179"
										monthly="₹ 15"
										offerAmount={30}
										name="subscription2"
										isSelected={selectedSubscription === "subscription2"}
										handleSubscriptionSelection={handleSubscriptionSelection}
										isRecommended={true}
									/>

									<Subscription
										detail="3 Months Subscription"
										total="₹ 149"
										monthly="₹ 25"
										offerAmount={20}
										name="subscription3"
										isSelected={selectedSubscription === "subscription3"}
										handleSubscriptionSelection={handleSubscriptionSelection}
									/>

									<Subscription
										detail="1 Month Subscription"
										total="₹ 99"
										monthly="₹ 33"
										offerAmount={10}
										name="subscription4"
										isSelected={selectedSubscription === "subscription4"}
										handleSubscriptionSelection={handleSubscriptionSelection}
									/>
								</div>
							</div>
							<hr className="break" />
							<div className="total">
								<div className="sub-fee">
									<h3>Subscription Fee</h3>
									<h3 className="amount">
										{selectedSubscription === "subscription1"
											? "₹99"
											: selectedSubscription === "subscription2"
											? "₹179"
											: selectedSubscription === "subscription3"
											? "₹149"
											: selectedSubscription === "subscription4"
											? "₹99"
											: ""}
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
