import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/EDYODA.svg";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-left">
				<div className="logo">
					<img src={Logo} alt="" />
				</div>
				<div className="dropdown">
					<button className="dropdown-button">
						Courses
						<AiOutlineDown className="drop-icon" />
					</button>
					<div className="dropdown-content">
						<NavLink to="/">Course 1</NavLink>
						<NavLink to="/">Course 2</NavLink>
						<NavLink to="/">Course 3</NavLink>
					</div>
				</div>
				<div className="dropdown">
					<button className="dropdown-button">
						Programs
						<AiOutlineDown className="drop-icon" />
					</button>
					<div className="dropdown-content">
						<NavLink to="/">Program 1</NavLink>
						<NavLink to="/">Program 2</NavLink>
						<NavLink to="/">Program 3</NavLink>
					</div>
				</div>
			</div>
			<div className="navbar-right">
				<button className="search-button">
					<AiOutlineSearch className="search-icon" />
				</button>
				<button className="login-button">Login</button>
				<button className="join-now-button">Join Now</button>
			</div>
		</nav>
	);
};

export default Navbar;
