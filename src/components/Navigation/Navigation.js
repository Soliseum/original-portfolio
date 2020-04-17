import React, { useState } from "react";

import { Menu, Layout } from "antd";
import { DashboardOutlined, RiseOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu, Item, ItemGroup } = Menu;

export const ProjectsNav = ({ navMenuProjects, currentProject, currentSection }) => {
	const [ openedKeys, setOpenedKeys ] = useState([ currentSection ]);
	const projectKeys = [ "Data Graphs", "Dashboards" ];
	// let isCollapsed = false;	// let isColor = "light";// const [ collapseMenu, setCollapseMenu ] = useState(isCollapsed);// const [ themeColor, setThemeColor ] = useState(isColor);

	/**
	 * const toggleMenu = () => {
	 *  setOpenedKeys([]);
	 *  setCollapseMenu(!collapseMenu);
	 * };
	 * const toggleTheme = () => {
	 * 	setThemeColor(themeColor === "dark" ? "light" : "dark");
	 * };
	*/

	const onOpenChange = (openKeys) => {
		// checks if last key exists in openedKeys
		const latestOpenKey = openKeys.find((key) => openedKeys.indexOf(key) === -1);
		/** check if latestOpenKey is a root key */
		if (projectKeys.indexOf(latestOpenKey) === -1) {
			/** if a root key */
		} else {
			setOpenedKeys(openedKeys.indexOf(latestOpenKey) === -1 ? [ latestOpenKey ] : []);
		}
	};

	return (
		<Sider
		// theme={themeColor} // collapsed={collapseMenu} // width={300} // collapsible // collapsedWidth={90} // trigger={null} // className="sider"
		>
			{/* <div className="triggers-div"> <Icon type={collapseMenu ? "right-circle" : "left-circle"} className="trigger" onClick={toggleMenu} /> <Icon type="fire" className="color-trigger" onClick={toggleTheme} theme="outlined" /> </div> */}
			<Menu
				style={{ width: 256, height: "100%" }}
				defaultSelectedKeys={[ currentProject ]}
				mode="inline"
				openKeys={openedKeys}
				onOpenChange={onOpenChange}
				// onClick={this.handleClick} // theme={themeColor}
			>
				{" "}
				<SubMenu
					key="Dashboards"
					title={
						<span>
							{" "}
							<DashboardOutlined /> <span>Dashboards</span>{" "}
						</span>
					}
				>
					<Item key="1">Dashboard 1</Item>
					{/* <Item key="2">Dashboard 2</Item> */}
				</SubMenu>
				<SubMenu
					key="Data Graphs"
					title={
						<span>
							{" "}
							<RiseOutlined /> <span>Data Graphs</span>{" "}
						</span>
					}
					onClick={navMenuProjects}
				>
					<ItemGroup key="g1" title="Static Data">
						{" "}
						<Item key="https://codepen.io/Soliseum/embed/bGdLVYv?height=900&theme-id=light&default-tab=result">
							Scatter + Animated
						</Item>
						{/* <Item key="2">Option 3</Item> */}
						{/* <Item key="3">Option 4</Item> */}
					</ItemGroup>
					<ItemGroup key="g2" title="Dynamic Data">
						{" "}
						<Item key="https://codepen.io/Soliseum/embed/preview/OJVjNPj?height=900&theme-id=light&default-tab=result">
							Mixed + Live Data
						</Item>
						{/* <Item key="5">Option 3</Item> */}
						{/* <Item key="6">Option 4</Item> */}
					</ItemGroup>
				</SubMenu>
			</Menu>
		</Sider>
	);
};
