import React from "react";

// start creating gallery and makes mouse parallax paper-style images with react-spring

export const Template = function() {
	return (
		<main>
			{/* <article className="bg-white">
				<div
					className="vh-75 cover bg-center"
					style="background-image: url(http://mrmrs.github.io/photos/001.jpg);"
				/>
				<div className="ph4 ph5-m ph6-l">
					<div className="pv5 f4 f2-ns measure center">
						<h1 className="fw6 f1 fl w-100 black-70 mt0 mb3 avenir">Project Title #034</h1>
						<p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
							A short description of your project. Maybe a few notes concerning your constraints and
							process. Standard lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore etc. al dolore magna aliqua. Ut enim ad.
						</p>
					</div>
					<div className="cf mw8 center">
						<div className="fl w-33 w-50-m w-33-l pr2 pr2-l">
							<div
								className="pv6 cover bg-center"
								style="background: url(http://mrmrs.github.io/photos/002.jpg);"
							/>
						</div>
						<div className="fl w-33 w-50-m w-33-l ph3 pr0-m ph3-l">
							<div
								className="pv6 cover bg-center"
								style="background-image: url(http://mrmrs.github.io/photos/003.jpg);"
							/>
						</div>
						<div className="fl w-33 w-100-m w-33-l pl2 pl0-m pl2-l mt4-m">
							<div
								className="pv6 cover bg-center"
								style="background-image: url(http://mrmrs.github.io/photos/004.jpg);"
							/>
						</div>
					</div>
					<div className="measure f3 center mv5 black-70">
						<h1 className="fw6 f3 avenir">The subtitle for the project</h1>
						<p className="lh-copy measure f4 f3-ns black-70 baskerville">
							Back in the office after his vacation on a 154-foot rented yacht named Mister Terrible, he
							feels that relaxation slipping away. He feels pulled inward, toward his own most valuable
							and destructive traits. Slights roll through his mind, eating at him: worst record ever,
							can't build a team, absentee landlord. Jordan reads the things written about him, the fuel
							arriving in a packet of clips his staff prepares. He knows what people say. He needs to
							know, a needle for a hungry vein. There's a palpable simmering whenever you're around
							Jordan, as if Air Jordan is still in there, churning, trying to escape. It must be strange
							to be locked in combat with the ghost of your former self.
						</p>
						<p className="lh-copy measure f4 f3-ns black-70 baskerville">
							The memories came to him, how he felt then. "It was very pure, if I can say it right," he'd
							explain later. "It was pure in 1984 … I was still dreaming." During the Olympics, he was
							deep in negotiations with Nike for his first shoe contract. He traded pins with other
							athletes. Eight years later, when he was the most famous person in the world and the Dream
							Team was forced to stay outside the Olympic Village, he'd be disappointed when that
							separation kept him from swapping pins again.
						</p>
					</div>
					<img src="http://mrmrs.github.io/photos/005.jpg" className="db w-100" />
					<blockquote className="mh0 pr0 mt5">
						<p className="f2 f1-l fw1 mv0 tc lh-title baskerville">
							“I remember going up to that McDonald's and getting my damn McRib. When I first got there.”
						</p>
						<p className="tc f6 gray">Michael Jordan</p>
					</blockquote>
					<div className="measure f4 f3-ns center mv5 black-70">
						<p className="lh-copy measure f3 black-70 baskerville">
							There's an unspoken shadow over the stories about that town house on Essex Drive. James
							Jordan remodeled the basement for his son. Did all the work himself, because he'd never let
							Michael pay for something he could do on his own. The first winter, while Michael was out of
							town for the All-Star Game, his pipes froze. His dad ripped out the walls, replacing the
							pipes himself, patching and repainting when he finished. He spent two weeks fixing his son's
							home. James and Mike -- that's where all this nostalgia has been headed, from the moment it
							began.
						</p>
						<div className="aspect-ratio aspect-ratio--16x9 mv5">
							<iframe
								src="https://www.youtube.com/embed/LAr6oAKieHk"
								className="aspect-ratio--object"
								frameborder="0"
								webkitallowfullscreen
								mozallowfullscreen
								allowfullscreen
							/>
						</div>
					</div>
				</div>
			</article>
			<section className="cf mt5 pv5 bt b--black-05 ph6-l">
				<h1 className="tc f5 ttu fw6 tracked mb4 avenir">Other Projects</h1>
				<a href="#0" className="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
					<div
						className="grow cover bg-center pv5 pv6-l"
						style="background-image:url(https://s3-us-west-2.amazonaws.com/prnt/hw-080411-cargo_960.jpg);"
					/>
				</a>
				<a href="#0" className="fl w-third w-25-ns border-box overflow-hidden  ba bw2 white" title="">
					<div
						className="grow cover bg-top pv5 pv6-l"
						style="background-image:url(https://s3-us-west-2.amazonaws.com/prnt/hwspringtour-cargo_960-1.jpg);"
					/>
				</a>
				<a href="#0" className="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
					<div
						className="grow cover bg-top pv5 pv6-l"
						style="background-image:url(https://s3-us-west-2.amazonaws.com/prnt/cc010611.s_960.jpg);"
					/>
				</a>
				<a href="#0" className="fl w-100 w-25-ns border-box overflow-hidden ba bw2 white" title="">
					<div
						className="grow cover bg-top pv5 pv6-l"
						style="background-image:url(https://s3-us-west-2.amazonaws.com/prnt/adam-stern-031209_960-2.jpg);"
					/>
				</a>
				<a href="#0" className="fl w-50 border-box overflow-hidden ba bw2 white" title="">
					<div
						className="grow cover bg-center pv5 pv7-l"
						style="background-image:url(https://s3-us-west-2.amazonaws.com/prnt/zh170311.4.cargo_960.jpg);"
					/>
				</a>
				<a href="#0" className="fl w-50 border-box overflow-hidden ba bw2 white" title="">
					<div
						className="grow cover bg-center pv5 pv7-l"
						style="background-image:url(https://s3-us-west-2.amazonaws.com/prnt/hw090911_960.jpg);"
					/>
				</a>
			</section> */}
			<h1>Project Template</h1>
		</main>
	);
};
