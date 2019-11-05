import React, { Component } from "react";
import CloseIcon from "@material-ui/icons/Close";

class AddList extends Component {
	state = {
		listFormOpen: false,
		title: ""
	};

	handleChange = e => {
		this.setState({ title: e.target.value });
	};

	render() {
		return (
			<div >
				{/* if this is true do this */}
				{this.state.listFormOpen && (
					<div className="addListContainer">
						<input
							className="input"
							type="test"
							value={this.state.title}
							onChange={this.handleChange} // Change the value
							placeholder=" Enter list title..."
						/>
						<div>
							<button
								className="greenBtn"
								onClick={() => {
									this.props.addList(this.state.title); //this sends it up to app?
									this.setState({
										title: ""
									});
								}}
							>
								Add list
							</button>
							<CloseIcon
								fontSize="small"
								opacity="0.5"
								className="closeIcon"
								onClick={() => this.setState({ listFormOpen: false, title: "" })}
							/>
						</div>
					</div>
				)}

		{/* else if this not true do this */}
				{!this.state.listFormOpen && (
					<div className="TrelloList"> 
					<button
						className="button"
						onClick={() => this.setState({ listFormOpen: true })}
					>
						+ Add another list
					</button>
					</div>
				)}
			</div>
		);
	}
}

export default AddList;
