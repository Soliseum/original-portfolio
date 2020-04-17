import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "../Home/Home";
import { Discover } from "../Discover/Discover";
import { Gallery } from "../Gallery/Gallery";
import { Projects } from "../Projects/Projects";
import { Travels } from "../Travels/Travels";

import "tachyons";
import soliseumLogo from "../../assets/images/soliseum-logo/Atomic-Code-Logo_79x79.png";
import "./Routes.css";

/** Soliseum-Logo_144x85
 * OR SWITCH PAGES TO BE SELECTED IN PUBLIC FOLDERS index.html file
 */
const routesStyle = {
	link: "nav-item pa3 light-blue dim",
	image: "logo-img",
};

const Routes = function() {
	return (
		<Router>
			<div>
				<div className="routes-container f3 fw6 db light-blue pa3 pb4">
					{" "}
					{/** bb bw1 b--black-10 */}
					<img src={soliseumLogo} className={routesStyle.image} title="Logo" alt="Logo" />
					<Link className={routesStyle.link} to="/">
						Soliseum
					</Link>
					<Link className={routesStyle.link} to="/Projects">
						Projects
					</Link>
					<Link className={routesStyle.link} to="/Gallery">
						Gallery
					</Link>
					<Link className={routesStyle.link} to="/Discover">
						Discover
					</Link>
					<Link className={routesStyle.link} to="/Travels">
						Travels
					</Link>
				</div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/Projects">
						<Projects />
					</Route>
					<Route path="/Gallery">
						<Gallery />
					</Route>
					<Route path="/Discover">
						<Discover />
					</Route>
					<Route path="/Travels">
						<Travels />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
// const Routes = function() {
// 	return (
// 		<Router>
// 			<div>
// <span className="routes-container">
// 	<span className="nav-item">Logo Placeholder</span>
// 	<Link className="nav-item" to="/">
// 		Home
// 	</Link>
// 	<Link className="nav-item" to="/cybersphere">
// 		CyberSphere
// 	</Link>
// 	<Link className="nav-item" to="/dashboard">
// 		Dashboard
// 	</Link>
// 	<Link className="nav-item" to="/adventurebnb">
// 		Adventurebnb
// 	</Link>
// </span>

// <Switch>
// 	<Route exact path="/">
// 		<Home />
// 	</Route>
// 	<Route path="/cybersphere">
// 		<CyberSphere />
// 	</Route>
// 	<Route path="/dashboard">
// 		<Dashboard />
// 	</Route>
// 	<Route path="/adventurebnb">
// 		<Adventurebnb />
// 	</Route>
// </Switch>
// 			</div>
// 		</Router>
// 	);
// };
/*
	A <Switch> looks through all its children <Route>
	elements and renders the first one whose path
	matches the current URL. Use a <Switch> any time
	you have multiple routes, but you want only one
	of them to render at a time
*/

// You can think of these components as "pages"
// in your app.

export default Routes;
