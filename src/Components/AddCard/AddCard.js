import React, { Component } from "react";
import CloseIcon from "@material-ui/icons/Close";

class AddCard extends Component {
	state = {
		cardFormOpen: false,
		title: ""
	};

	handleChange = e => {
		this.setState({ title: e.target.value });
	};

	changeState = () => {
		this.setState({cardFormOpen: true})
	}

	render() {
		return (
			<div>
				{this.state.cardFormOpen && (
					<div className="addListContainer">
						<input
							className="input"
							type="test"
							value={this.state.title}
							onChange={this.handleChange}
							placeholder=" Enter card title..."
						/>
						<div className="buttContainer">
							<button
								className="greenBtn"
								onClick={() => {
									this.props.addCard(this.state.title, this.props.id); //sending it up to app
									this.setState({
										title: ""
									});
								}}
							>
								Add card
							</button>
							<CloseIcon
								fontSize="small"
								opacity="0.5"
								className="closeIcon"
								onClick={() =>
									this.setState({ cardFormOpen: false, title: "" })
								}
							/>
						</div>
					</div>
				)}

				{!this.state.cardFormOpen && (
					<div>
						<button
							className="button"
							onClick={() => this.setState({ cardFormOpen: true })}
						>
							+ Add card
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default AddCard;
