import React from "react";
import "./Home.css";
import Vector from "../assets/Vector.svg";
import Scholar from "../assets/scholar.svg";
import TV from "../assets/tv.svg";
import Clock from "../assets/clock.svg";
import Ads from "../assets/ads.svg";
const Home = () => {
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
				<div className="banner-right">price box</div>
			</div>
		</>
	);
};

export default Home;
