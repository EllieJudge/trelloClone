import React from "react";
import { ChromePicker } from "react-color";
import PaletteIcon from "@material-ui/icons/Palette";

class ColorPicker extends React.Component {
	state = {
		displayColorPicker: false
	};

	handleClick = () => {
		console.log("hi....");
		this.setState({ displayColorPicker: !this.state.displayColorPicker });
	};

	handleClose = () => {
		this.setState({ displayColorPicker: false });
	};

	render() {
		const popover = {
			position: "absolute",
			zIndex: "2",
			right: "0em"
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
				<PaletteIcon onClick={this.handleClick} />
				{this.state.displayColorPicker ? (
					<div style={popover}>
						<div style={cover} onClick={this.handleClose} />
						<ChromePicker
							color={this.props.color}
							onChangeComplete={this.props.updateColor}
						/>
					</div>
				) : null}
			</div>
		);
	}
}

export default ColorPicker;
