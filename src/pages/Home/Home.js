import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Home } from "../Home/Home";
// import { CyberSphere } from "../CyberSphere/CyberSphere";
// import { Dashboard } from "../Dashboard/Dashboard";
// import { Adventurebnb } from "../Adventurebnb/Adventurebnb";

import "tachyons";
import "./Home.css";
import "../../assets/stylesheets/animate.css";
import architecturalWonderBookshop from "../../assets/images/home/architecture-bookshop-ivo-rainha-1261177.jpg";
import cathedralOfLearning from "../../assets/images/home/ancient-architecture-building-892083.jpg";
import pigSwim from "../../assets/images/home/pig-swimming-bird-passenger-beach.jpg";
import planetNebula from "../../assets/images/home/Colourful-night-sky-with-fictional-planet-stars-nebula.jpg";
import globalWarmingUmbrella from "../../assets/images/home/global-warming-sun-ice-umbrella.png";
// import superVillain from "../../assets/images/home/blur-colored-smoke-creative-1694348.jpg";
import treeOfWisdom from "../../assets/images/home/beach-clouds-grass-451855.jpg";

const homeStyle = {
	article: "mw5 center bg-white br3 pa2 pa4-ns mv3 ba b--black-10 flex-card",
	image: "br-100 dib ba b--black-05 pa1 image-card",
	imageHeartbeat: "br-100 dib ba b--black-05 pa1 animated infinite heartBeat slower",
	titleGreen: "f3 mb2 light-green pv2",
	titleBlue: "f3 mb2 light-blue pv2",
	bar: "mw3 bb bw1 b--black-10",
	h2: "f4 fw4 gray mt0 pv3",
};

export const Home = function() {
	return (
		<div>
			<header className="f3 fw6 db light-blue tc mv4 pb4">
				<b className="f2 no-underline underline-hover">Welcome to Soliseum</b>
				<br />
				<h4 className="black-30">
					My Github Project Portfolio<br />A Deployed React Application
				</h4>
				{/* <p className="animated infinite pulse slower">I Am Christoph Reyes</p> */}
				<p>I Am Christoph Reyes</p>
			</header>

			<ul className="flex-container">
				<li className="flex-item">
					<article className={homeStyle.article}>
						<div className="tc">
							<img
								src={treeOfWisdom}
								className={homeStyle.image}
								title="Photo of a flourishing tree, isolated on bright green grass leading to a tropical blue ocean. Vivd setting sun with colors in the sky reaching from deep purple, orange, yellow, pink, and white."
								alt="A flourishing tree, isolated on bright green grass leading to a tropical blue ocean. Vivd setting sun with colors in the sky reaching from deep purple, orange, yellow, pink, and white."
							/>
							<a href="./">
								<h1 className={homeStyle.titleBlue}>Discover</h1>
							</a>
							<hr className={homeStyle.bar} />
							<h2 className={homeStyle.h2}>
								<code>Bio-optimizing, Memory Palaces, The Wim Hof Method.</code>
							</h2>
						</div>
					</article>
				</li>
				<li className="flex-item">
					<article className={homeStyle.article}>
						<div className="tc">
							<img
								src={globalWarmingUmbrella}
								className={homeStyle.image}
								title="Photo of the planet surrounded by its ozone with ice ontop. Behind is the bright sun which is partially deflected by a giant umbrella."
								alt="The planet surrounded by the ozone with giant ice glaciers ontop. Behind the planet is the bright, hot sun. The sun is partially deflected by a giant umbrella ontop of the planet."
							/>
							<a href="./">
								<h1 className={homeStyle.titleBlue}>Gallery</h1>
							</a>
							<hr className={homeStyle.bar} />
							<h2 className={homeStyle.h2}>
								<code>Graphics, & interactive designs.</code>
							</h2>
						</div>
					</article>
				</li>
				<li className="flex-item">
					<article className={homeStyle.article}>
						<div className="tc">
							<img
								src={architecturalWonderBookshop}
								className={homeStyle.image}
								title="Photo of beautifully designed library."
								alt="Beautiful cathedral-esqu library. Center point is a red staircase with a brightly lit & seemingly endlass wall of books on both sides."
							/>
							<a href="./">
								<h1 className={homeStyle.titleBlue}>Projects</h1>
							</a>
							<hr className={homeStyle.bar} />
							<h2 className={homeStyle.h2}>
								<code>Past work and projects.</code>
							</h2>
						</div>
					</article>
				</li>
				<li className="flex-item">
					<article className={homeStyle.article}>
						<div className="tc">
							<img
								src={pigSwim}
								className={homeStyle.image}
								title="Photo of a pig swimming with a bird passenger through beautiful turquoise water within a tropical ocean."
								alt="A pig swimming toward the screen with a bird passenger. They are swimming through beautiful turquoise water within a tropical ocean."
							/>
							<a href="./">
								<h1 className={homeStyle.titleGreen}>World Travel</h1>
							</a>
							<hr className={homeStyle.bar} />
							<h2 className={homeStyle.h2}>
								<code>Travel advice, suggestions and related articles.</code>
							</h2>
						</div>
					</article>
				</li>
				<li className="flex-item">
					<article className={homeStyle.article}>
						<div className="tc">
							<img
								src={cathedralOfLearning}
								className={homeStyle.image}
								title="Photo of a young man standing infront of a roman like structure with columns. Written on top of the structure is 'CATHEDRAL OF LEARNING'."
								alt="A young man standing infront of a roman like structure with columns. Written on top of the structure is 'CATHEDRAL OF LEARNING'"
							/>
							<a href="./">
								{/* <Link className="nav-item" to="/cybersphere"> */}
								<h1 className={homeStyle.titleGreen}>Learn</h1>
								{/* </Link> */}
							</a>
							<hr className={homeStyle.bar} />
							<h2 className={homeStyle.h2}>
								<code>React JavaScript HTML5 CSS3</code>
							</h2>
						</div>
					</article>
				</li>
				<li className="flex-item">
					<article className={homeStyle.article}>
						<div className="tc">
							<img
								src={planetNebula}
								className={homeStyle.image}
								title="Photo of planet with blue smoke-like images of a nebula"
								alt="A distant planet with blue smoke-like images of a nebula"
							/>
							<a href="./">
								<h1 className={homeStyle.titleGreen}>Our Universe</h1>
							</a>
							<hr className={homeStyle.bar} />
							<h2 className={homeStyle.h2}>
								<code>Under Construction</code>
							</h2>
						</div>
					</article>
				</li>
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
								<h1 className={homeStyle.titleBlue}>Chamber of Heroes</h1>
							</a>
							<hr className={homeStyle.bar} />
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
								<h1 className={homeStyle.titleBlue}>Umbrella Smoke</h1>
							</a>
							<hr className={homeStyle.bar} />
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
