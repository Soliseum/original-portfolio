import React, { useState, useEffect } from "react";
import { Input, Pagination, Card/*, Select, Icon, Avatar*/ } from "antd";
import { ChosenHero } from "./ChosenHero";

import "antd/dist/antd.css";
import "tachyons";
import "./Heroes.css";

const { Search } = Input;
// const { Option } = Select;
const { Meta } = Card;

const BASE_URI = `https://superheroapi.com/api/10157251704418183/search`;

// let heroId = "502";
// let searchByName = "search/One Punch Man";

const chosenChampion = {
	card: { margin: "10px 0", background: "#fff", minHeight: 580 },
	name: "One Punch Man",
	realName: "That One Guy",
	description: "The one hit wonder",
	image: "mw-100 br4 interactiveHover",
	head: "db w-100-l tc",
	title: "f4 f3-m f2-l pa2 mv1",
};

export const ChamberOfHeroes = () => {
	const stringifyData = (data) => JSON.stringify(data, null, 2);
	const initialData = stringifyData({ data: null });
	const [ heroData, setHeroData ] = useState(initialData);
	const [ selectedHero, setSelectedHero ] = useState("superman");
	// useEffect(() => {
	// 	fetch()/** fetch the selected hero?? */
	// }), [selectedHero]
	useEffect(
		() => {
			const fetchData = () => {
				const uri = `${BASE_URI}/${selectedHero}`;
				fetch({ uri }, { mode: "no-cors" }).then((res) => res.json()).then(({ results }) => {
					const { name, gender, dob } = results[0];
					const dataVal = stringifyData({
						...name,
						gender,
						age: dob.age,
					});
					setHeroData(dataVal);
				});
			};
			fetchData();
		},
		[ selectedHero ],
	);

	// function onChange(value) {
	// 	setSelectedHero(value);
	// }

	function onSearch(value) {
		console.log("search:", value);
		// setSelectedHero(value);
	}

	function onPressEnter(e) {
		setSelectedHero(e);
	}

	return (
		<div className="pa5">
			<header className="f3 fw6 db light-blue tc pb4">
				<b className="f2 no-underline underline-hover">Colosseum of Heroes</b>
				<br />
				<h3 className="black-30 b f3">Choose Your Champion</h3>
			</header>
			<Search
				style={{ width: 200 }}
				placeholder="Name Your Hero"
				onSearch={onSearch}
				onPressEnter={onPressEnter}
			/>

			<div className="ma5 pa5">
				<div className={chosenChampion.head}>
					<h1 className={chosenChampion.title}>{chosenChampion.name}</h1>
					<img
						src="https://www.superherodb.com/pictures2/portraits/10/100/10522.jpg"
						className={chosenChampion.image}
						alt="Selected Champion"
					/>
				</div>
				<Card style={chosenChampion.card} hoverable title={chosenChampion.name}>
					<Meta
						className="pa3"
						title={chosenChampion.realName}
						description="Loves walks on the beach and psychotic killing sprees"
					/>

					<ChosenHero props={"props"} heroData={heroData} />
				</Card>
			</div>

			<div className="tc ma5 pa5">
				<Pagination showQuickJumper /** defaultCurrent={2}*/ total={731} pageSize={1} />
			</div>
		</div>
	);
};
