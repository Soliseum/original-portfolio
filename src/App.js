import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./pages/Routes/Routes";

import "tachyons";

const App = function() {
	return (
		<Router>
			<Routes />
		</Router>
	);
};

export default App;
