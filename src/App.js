import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./pages/Routes/Routes";

import "tachyons";
import "antd/dist/antd.css";

const App = function() {
	return (
		<Router>
			<Routes />
		</Router>
	);
};

export default App;
