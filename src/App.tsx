import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage, CalculatorPage } from "./views/index";

import { Footer } from "./components/index";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					{/* <Route exact path="/faq" component={FAQPage} /> */}
					<Route
						exact
						path="/calculator"
						component={CalculatorPage}
					/>
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
