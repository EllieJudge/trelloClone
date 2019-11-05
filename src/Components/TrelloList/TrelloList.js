import React, { Component } from "react";
import "./style.css";
import TrelloCard from "../Card/Card";
import AddCard from "../AddCard/AddCard";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import uuid from "uuid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function StyledMenuItem(props) {
	
	return (
		<MenuItem
			style={{ fontSize: "11.5px", width: "300px" }}
			onDoubleClick={props.onClick}
		>
			{props.title}{" "}
		</MenuItem>
	);
}

class TrelloList extends Component {
	state = {
		anchorEl: null
	};

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { title, cards, id } = this.props.list;
		const { deleteCard } = this.props;

		this.addCardElement = React.createRef(); //YESSSSSSS!!!!!how to change state in a child from a parent

		return (
			<div className="TrelloList">
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<h3>{title}</h3>

					<div
						style={{ marginRight: "11px", marginTop: "9px", cursor: "pointer" }}
						aria-controls="simple-menu"
						aria-haspopup="true"
						onClick={this.handleClick}
					>
						<MoreHorizIcon fontSize="small" opacity="0.3" />
					</div>
					<Menu
						id="simple-menu"
						anchorEl={this.state.anchorEl}
						keepMounted
						open={Boolean(this.state.anchorEl)}
						onClose={this.handleClose}
					>
						<MenuItem
							style={{
								opacity: "0.6",
								borderBottom: "0.3px solid",
								fontSize: "12px"
							}}
						>
							List Actions
						</MenuItem>

						<StyledMenuItem
							title="Add Card..."
							onClick={
								() =>
									this.addCardElement.current.changeState() && this.handleClose //setState of AddCard to true
							}
						/>

						<StyledMenuItem title="Copy List..." onClick={this.handleClose} />
						<StyledMenuItem title="Move List..." onClick={this.handleClose} />
						<StyledMenuItem title="Change List Color..." onClick={this.handleClose} />

						<StyledMenuItem
							title="Archive This List (double click lol)"
							onClick={() => this.props.deleteList(id)} //broken
						/>
					</Menu>
				</div>
				<div className="cardContainers">
					{cards.map((card, index) => {
						return (
							<TrelloCard
								title={card.title}
								description={card.description}
								id={card.id}
								listId={id}
								key={uuid()}
								deleteCard={deleteCard}
								cardOptions={this.props.cardOptions} //Delete
							/>
						);
					})}
				</div>
				<AddCard
					addCard={this.props.addCard}
					id={id}
					ref={this.addCardElement}
				/>
			</div>
		);
	}
}

export default TrelloList;
