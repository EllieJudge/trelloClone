import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../Card/style.css";
import CardModal from "../CardModal/CardModal";

function TrelloCard(props) {
	const { title, description, id, cardOptions, listId, deleteCard } = props; //delete card options
	return (
		<div>
			<Card className="card" onClick={() => cardOptions(listId, id)}>
			
			<div className="penModal">
						<CardModal title={title} cardId={id} listId={listId} description={description} deleteCard={deleteCard}/>
					</div>

				<CardContent
					style={{
						paddingBottom: "5px",
						paddingTop: "5px",
						overflowX: "scroll"
					}}
				>
					<Typography
						gutterBottom
						style={{ fontSize: "12px", marginBottom: "0px" }}
					>
						{title}{" "}
					</Typography>

					<Typography
						gutterBottom
						style={{ fontSize: "10px", marginTop: "0px" }}
					>
						{description}
					</Typography>
				</CardContent>
			
			</Card>
		</div>
	);
}

export default TrelloCard;
