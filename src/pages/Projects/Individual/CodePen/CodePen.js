import React /*,{ useState, useEffect }*/ from "react";

export const CodePen = ({ currentSection, currentProject }) => {
	return (
		<div>
			<h1>{currentSection}</h1>
			<iframe
				className="vh-75 w-100 mw8"
				scrolling="no"
				title="Plotly Demo"
				src={currentProject}
				frameborder="no"
				allowtransparency="true"
				allowfullscreen="true"
			/>
		</div>
	);
};
