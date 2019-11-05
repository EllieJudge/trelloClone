import React, { Component } from "react";
import CreateIcon from "@material-ui/icons/Create";

class PenIconPopOutMenu extends Component {

  state = {
    displayEditMenu: false
	};
  
	handleClick = () => {
		this.setState({ displayEditMenu: !this.state.displaySideMenu });
	};
  
	handleClose = () => {
    this.setState({ displayEditMenu: false });
	};
	render() {
    console.log("props from penIconPopOut", this.props)
    const popover = {
			position: "absolute",
			zIndex: "2",
      right: "0em",
		};
		const cover = {
			position: "fixed",
			top: "0px",
			right: "0px",
			bottom: "0px",
			left: "0px"
		};


		return (
			<div>
				<CreateIcon
					fontSize="inherit"
					opacity="0.5"
					type="button"
					onClick={this.handleClick}
				/>

				{ this.state.displayEditMenu ? 
					<div style={popover}>
						<textarea value="" placeholder="" style={{width:"256px"}}></textarea>
						<div className="buttContainer">
							<button className="greenBtn">Save</button>
						</div>
					</div>
				 : 
					""
				}
			</div>
		);
	}
}

export default PenIconPopOutMenu;
