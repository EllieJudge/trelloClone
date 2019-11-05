import React, { Component } from "react";
import "./style.css";
import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from "@material-ui/icons/AddBox";
import InfoIcon from "@material-ui/icons/Info";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ColorPicker from "../ColorPicker";

class NavBar extends Component {
	render() {
		const { updateColor, color } = this.props;

		return (
			<div className="navbar">
				<div className="left-side">
					<a href="#home">
						<HomeIcon />
					</a>

					<a className="boards-title" href="#boards">
						Boards
					</a>
				</div>

				<img
					className="trello-logo"
					src={
						"https://i2.wp.com/graphpaperpress.com/wp-content/uploads/2015/01/Trello-Logo-1.png?fit=660%2C300&ssl=1"
					}
					alt="Logo"
				/>

				<div className="right-side">
					<p className="icons">
						<ColorPicker color={color} updateColor={updateColor} />
					</p>

					<a href="alerts" className="icons">
						<NotificationsNoneIcon fontSize="small" />
					</a>

					<a href="#add" className="icons">
						<AddBoxIcon fontSize="small" />
					</a>

					<a href="#moreInfo" className="icons">
						<InfoIcon fontSize="small" />
					</a>
				</div>
			</div>
		);
	}
}

export default NavBar;
