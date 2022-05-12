import "./App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./components/Header";

function App() {
	return (
		<div className="app">
			<Router>
				<>
					<Switch>
						<Route path="/" exact>
							{/* Header */}
							<Header />
						</Route>
					</Switch>
				</>
			</Router>
		</div>
	);
}

export default App;
