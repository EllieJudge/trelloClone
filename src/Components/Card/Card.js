import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../Card/style.css";

function TrelloCard(props) {
	console.log("Props from TrelloCard: ", props.content);

	const { title, description } = props;
	return (
		<div className="cardContainer">
			<Card className="card">
				<CardContent>
					<Typography gutterBottom>{title}</Typography>
					<Typography gutterBottom>{description}</Typography>
				</CardContent>
			</Card>
		</div>
	);
}

export default TrelloCard;
