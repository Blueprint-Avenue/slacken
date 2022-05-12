import "./App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Router>
				<>
					<Switch>
						<Route path="/" exact>
							<h1>HOME PAGE</h1>
						</Route>
					</Switch>
				</>
			</Router>
		</div>
	);
}

export default App;
