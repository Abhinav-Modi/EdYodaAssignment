import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
const App = () => {
	return (
		<>
			<Navbar />

			<div className="container">
				<Home />
			</div>
		</>
	);
};

export default App;
