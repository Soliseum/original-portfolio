import React, { useState, useEffect } from "react";

import { Layout } from "antd";
import { ProjectsNav } from "../../components/Navigation/Navigation";
import { CodePen } from "./Individual/CodePen/CodePen";
// import { GoDashboard } from "react-icons/go";

const { Content, Footer } = Layout;
const getProjectToken = sessionStorage.getItem("Project Token");
const getSectionToken = sessionStorage.getItem("Section Token");
export const Projects = () => {
	const [ currentProject, setCurrentProject ] = useState(
		getProjectToken
			? getProjectToken
			: "https://codepen.io/Soliseum/embed/bGdLVYv?height=900&theme-id=light&default-tab=result",
	);
	const [ currentSection, setCurrentSection ] = useState(getSectionToken ? getSectionToken : "Data Graphs");

	const navMenuProjects = (e) => {
		setCurrentProject(e.key);
	};
	const navMenuSection = (e) => {
		setCurrentSection(e.key);
	};

	useEffect(
		() => {
			sessionStorage.setItem("Project Token", currentProject);
		},
		[ currentProject ],
	);
	useEffect(
		() => {
			sessionStorage.setItem("Section Token", currentSection);
		},
		[ currentSection ],
	);
	return (
		<Layout className="layout" hasSider={true}>
			<ProjectsNav
				navMenuProjects={navMenuProjects}
				navMenuSection={navMenuSection}
				currentSection={currentSection}
				currentProject={currentProject}
			/>
			<Content style={{ padding: "0 10%" }} className="bg-white">
				{currentSection === "Data Graphs" && (
					<div className="pb1">
						<CodePen currentProject={currentProject} currentSection={currentSection} />
					</div>
				)}

				<Footer className="tc" style={{ background: "white" }}>
					Soliseum ©2020 Created by Christoph
				</Footer>
			</Content>
		</Layout>
	);
};
/* <Row>
					<Col span={22} offset={1}>
						<DataGraphs navProjects={navProjects} />
					</Col>
				</Row> */
/* <Row justify="space-around">
					<Col span={6}>col-6</Col>
					<Col span={6}>col-6</Col>
					<Col span={6}>col-6</Col>
					<Col span={6}>col-6</Col>
				</Row> */
