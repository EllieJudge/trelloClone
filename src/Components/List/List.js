import React, { Component } from "react";
import "./style.css";
import TrelloCard from "../Card/Card";

class List extends Component {
	render() {
		console.log("Props from List: ", this.props);
		const { title, cards } = this.props.list;

		return (
			<div className="list">
				<h3>{title}</h3>
				{/* <TrelloCard card1={cards[0].content} /> */}
				{cards.map((card, index) => {
					console.log("card is: ", card, " index is: ", index);
					return (
						<TrelloCard title={card.title} description={card.description} />
					);
				})}
			</div>
		);
	}
}

export default List;
