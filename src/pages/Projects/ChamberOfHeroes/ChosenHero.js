import React from "react";
import { Tabs, Card } from "antd";
import { GoShield, GoLightBulb, GoRuby, GoMilestone } from "react-icons/go";

const { TabPane } = Tabs;
const { Grid } = Card;

const gridStyle = {
	width: "25%",
	textAlign: "center",
};

const chosenHeroStyle = {
	p: { height: 400, overflow: "auto" },
	fs120: { fontSize: "1.2em" },
	fs130: { fontSize: "1.3em" },
	divsize: { height: 400, overflow: "auto" },
};

const InfoBox = ({ hText, pText }) => {
	return (
		<span>
			<h3>{hText}</h3>
			<p style={chosenHeroStyle.p}>{pText}</p>
		</span>
	);
};
// const callback = (key) => {
// 	console.log(key);
// };
export const ChosenHero = ({ props }) => {
	const { powerstats, biography, appearance, work/*, connections, image, name*/ } = props;
	return (
		<div>
			{/* <Tabs onChange={callback} type="card"> */}
			<Tabs type="card">
				<TabPane
					tab={
						<span style={chosenHeroStyle.fs130}>
							<GoShield size={"1.2em"} /> Stats
						</span>
					}
					key="1"
				>
					<InfoBox hText={"Power Stats"} pText={powerstats} />
				</TabPane>

				<TabPane
					tab={
						<span style={chosenHeroStyle.fs130}>
							<GoLightBulb size={"1.2em"} /> Biography
						</span>
					}
					key="2"
				>
					<InfoBox hText={"Biography"} pText={biography} />
				</TabPane>

				<TabPane
					tab={
						<span style={chosenHeroStyle.fs130}>
							<GoRuby size={"1.2em"} /> Appearance
						</span>
					}
					key="3"
				>
					<InfoBox hText={"Appearance"} pText={appearance} />
				</TabPane>

				<TabPane
					tab={
						<span style={chosenHeroStyle.fs130}>
							<GoShield size={"1.2em"} /> Work
						</span>
					}
					key="4"
				>
					<InfoBox hText={"Work"} pText={work} />
				</TabPane>

				<TabPane
					tab={
						<span style={chosenHeroStyle.fs130}>
							<GoMilestone size={"1.2em"} /> Connections
						</span>
					}
					key="5"
				>
					<h3>Connections</h3>
					<div style={chosenHeroStyle.divsize}>
						<Grid style={gridStyle}>Content</Grid>
						<Grid style={gridStyle}>Connections</Grid>
						<Grid style={gridStyle}>Connections</Grid>
						<Grid style={gridStyle}>Connections</Grid>
						<Grid style={gridStyle}>Content</Grid>
						<Grid hoverable={false} style={gridStyle}>
							Content
						</Grid>
						<Grid style={gridStyle}>Content</Grid>
					</div>
				</TabPane>
			</Tabs>
		</div>
	);
};
