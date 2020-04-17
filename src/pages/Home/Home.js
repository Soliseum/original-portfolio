import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Home } from "../Home/Home";
// import { CyberSphere } from "../CyberSphere/CyberSphere";
// import { Dashboard } from "../Dashboard/Dashboard";
// import { Adventurebnb } from "../Adventurebnb/Adventurebnb";

import "./Home.css";
import "../../assets/stylesheets/animate.css";

import { GoTools, GoRuby, GoCircuitBoard, GoMilestone } from "react-icons/go";

import architecturalWonderBookshop from "../../assets/images/home/architecture-bookshop-ivo-rainha-1261177.jpg";
import cathedralOfLearning from "../../assets/images/home/ancient-architecture-building-892083.jpg";
import pigSwim from "../../assets/images/home/pig-swimming-bird-passenger-beach.jpg";
import planetNebula from "../../assets/images/home/Colourful-night-sky-with-fictional-planet-stars-nebula.jpg";
import globalWarmingUmbrella from "../../assets/images/home/global-warming-sun-ice-umbrella.png";
// import superVillain from "../../assets/images/home/blur-colored-smoke-creative-1694348.jpg";
import treeOfWisdom from "../../assets/images/home/beach-clouds-grass-451855.jpg";
import hotAirBallonSun from "../../assets/images/adventure-backlit-birds-443356.jpg";

const homeStyle = {
	article: "mw5 center bg-white br2 pa2 pa4-ns mv3 ba b--black-10 flex-card shadow-5 grow-large",
	image: "br-100 dib ba b--black-05 pa1 image-card",
	title: "f3 fw4 mb2 light-purple pv2 bb bw1 b--black-10",
	// titleGreen: "f3 mb2 light-green pv2",
	// titleBlue: "f3 mb2 light-blue pv2",
	h2: "f4 fw2 gray mt0 pv3",
};

export const HomeCard = ({ image, imageTitle, imageAlt, cardHref, cardTitle, cardCode }) => {
	return (
		<li className="flex-item">
			<article className={homeStyle.article}>
				<div className="tc">
					<img src={image} className={homeStyle.image} title={imageTitle} alt={imageAlt} />
					<a href={cardHref}>
						<h1 className={homeStyle.title}>{cardTitle}</h1>
					</a>

					<h2 className={homeStyle.h2}>
						<code>{cardCode}</code>
					</h2>
				</div>
			</article>
		</li>
	);
};

export const Home = function() {
	return (
		<div>
			<header className="f3 db light-purple tc mv4 pb4">
				<h3 className="f1 fw4 no-underline grow">Welcome to Soliseum</h3>
				<h3 className="black-60 fw6">My name is Christoph Reyes</h3>
				<h4 className="black-30 fw6">
					This is my Github Project Portfolio in transition to a Deployed React Application.<br />
					<span className="purple">
						<GoTools />{" "}
					</span>Currently Under Construction as of Feb, 2020<span className="light-purple">
						{" "}
						<GoCircuitBoard />
					</span>
				</h4>
				<h4 className="fw6 black-30">
					<span className="red">
						<GoRuby />{" "}
					</span>Website link below is running<br />
					<span className="black-50">
						<GoMilestone />{" "}
					</span>Projects ETA: March, 2020
				</h4>
			</header>

			<ul className="flex-container">
				<HomeCard
					image={hotAirBallonSun}
					imageTitle="Hot air balloon"
					imageAlt="A hot air balloon flying over the sea. Sunlight is coming in from the background"
					cardHref="https://www.lajollalogic.com"
					cardTitle="Website"
					cardCode="Company Website Made From Scratch"
				/>
				<HomeCard
					image={architecturalWonderBookshop}
					imageTitle="Photo of beautifully designed library."
					imageAlt="Beautiful cathedral-esqu library. Center point is a red staircase with a brightly lit & seemingly endlass wall of books on both sides."
					to="/Projects"
					cardTitle="Projects"
					cardCode="Past work and projects."
				/>

				<HomeCard
					image={globalWarmingUmbrella}
					imageTitle="Photo of the planet surrounded by its ozone with ice ontop. Behind is the bright sun which is partially deflected by a giant umbrella."
					imageAlt="The planet surrounded by the ozone with giant ice glaciers ontop. Behind the planet is the bright, hot sun. The sun is partially deflected by a giant umbrella ontop of the planet."
					// cardHref="./Gallery"
					cardTitle="Gallery"
					cardCode="Graphics, & interactive designs."
				/>

				<HomeCard
					image={treeOfWisdom}
					imageTitle="Photo of a flourishing tree, isolated on bright green grass leading to a tropical blue ocean. Vivd setting sun with colors in the sky reaching from deep purple, orange, yellow, pink, and white."
					imageAlt="A flourishing tree, isolated on bright green grass leading to a tropical blue ocean. Vivd setting sun with colors in the sky reaching from deep purple, orange, yellow, pink, and white."
					// cardHref="./Discover"
					cardTitle="Discover"
					cardCode="Bio-optimizing, Memory Palaces, The Wim Hof Method."
				/>

				<HomeCard
					image={pigSwim}
					imageTitle="Photo of a pig swimming with a bird passenger through beautiful turquoise water within a tropical ocean."
					imageAlt="A pig swimming toward the screen with a bird passenger. They are swimming through beautiful turquoise water within a tropical ocean."
					// cardHref="./Travels"
					cardTitle="World Travel"
					cardCode="Travel advice, suggestions and related articles."
				/>

				<HomeCard
					image={cathedralOfLearning}
					imageTitle="Photo of a young man standing infront of a roman like structure with columns. Written on top of the structure is 'CATHEDRAL OF LEARNING'."
					imageAlt="A young man standing infront of a roman like structure with columns. Written on top of the structure is 'CATHEDRAL OF LEARNING'"
					// cardHref="./"
					cardTitle="Learning"
					cardCode="React JavaScript HTML5 CSS3"
				/>

				<HomeCard
					image={planetNebula}
					imageTitle="Photo of planet with blue smoke-like images of a nebula"
					imageAlt="A distant planet with blue smoke-like images of a nebula"
					// cardHref="./"
					cardTitle="Our Universe"
					cardCode="Under Construction"
				/>
				{/* <li className="flex-item">
					<article className={homeStyle.article}>
						<div className="tc">
							<img
								src={superVillain}
								className={homeStyle.image}
								title="Photo of a masked super villain creating a bright yellow ball of energy between their hands"
								alt="A masked super villain creating a bright yellow ball of energy between their hands"
							/>
							<a href="../ChamberOfHeroes/ChamberOfHeroes.js">
								<h1 className={homeStyle.title}>Chamber of Heroes</h1>
							</a>

							<h2 className={homeStyle.h2}>
								<code>JavaScript React Dynamic Data</code>
							</h2>
						</div>
					</article>
				</li> */}
				{/* <li className="flex-item">
					<article className={homeStyle.article}>
						<div className="tc">
							<img
								src={colorfulArt}
								className={homeStyle.imageHeartbeat}
								title="Photo of a pink and white smoke bouncing off the top of a white umbrella, with a black background."
								alt="Pink and white smoke bouncing off the top of a white umbrella, with a black background."
							/>
							<a href="./">
								<h1 className={homeStyle.title}>Umbrella Smoke</h1>
							</a>

							<h2 className={homeStyle.h2}>
								<code>Bounce that smoke</code>
							</h2>
						</div>
					</article>
				</li> */}
			</ul>

			<footer className="tc f3 ma5 black-70">
				<br />
				<b>&copy; Soliseum</b>
			</footer>
		</div>
	);
};
