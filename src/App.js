import React, { Component } from "react";
import "./App.css";
import TrelloList from "./Components/TrelloList/TrelloList";
import NavBar from "./Components/NavBar";
import AddList from "./Components/AddList/AddList";
import uuidv1 from "uuid/v1";
import ColorPicker from "./Components/ColorPicker";

class App extends Component {
	state = {
		colorPickerOpen: false,
		backgroundColor: "whiteSmoke",
		board: [
			{
				id: "LIST_ID", //list
				title: "Title one",
				cards: [
					{
						id: "CARD_ONE_ID", //card
						title: "Card one",
						description: "This is description for card one"
					},
					{
						id: "CARD_TWO_ID", //card
						title: "Card two",
						description: null
					}
				]
			},
			{
				id: "LIST_ID_2", //list
				title: "Title one",
				cards: [
					{
						id: "CARD_ONE_ID", //card
						title: "Card one",
						description: "This is description for card one"
					},
					{
						id: "CARD_TWO_ID", //card
						title: "Card two",
						description: null
					}
				]
			},
			{
				id: uuidv1(),
				title: "NOT Food",
				cards: [
					{
						id: uuidv1(),
						title: "Cheese",
						description: null
					},
					{
						id: uuidv1(),
						title: "Chicken",
						description: null
					},
					{
						id: uuidv1(),
						title: "Eggs",
						description: null
					},
					{
						title: "Beetroot (yuck)",
						description: null
					}
				]
			},
			{
				id: uuidv1(),
				title: "Animals",
				cards: [
					{
						id: uuidv1(),
						title: "Dog",
						description: "Woof."
					},
					{
						id: uuidv1(),
						title: "Cat",
						description: "Meow."
					},
					{
						id: uuidv1(),
						title: "Chicken",
						description: "pocooock"
					},
					{
						id: uuidv1(),
						title: "Cow",
						description: "moooo"
					}
				]
			}
		]
	};

	showColorPicker = () => {
		if (!this.state.colorPickerOpen) {
			this.setState({ colorPickerOpen: true });
		} else this.setState({ colorPickerOpen: false });
	};

	updateColor = color => {
		this.setState({ backgroundColor: color.hex });
	};

	cardOptions = (listId, cardId) => {
		console.log("What would you like to do with this card?", listId, cardId);
	};

	deleteCard = (listId, cardId) => {
		console.log("Deleting list...");
		const newBoard = this.state.board.map(list => {
			if (list.id === listId) {
				const filteredCards = list.cards.filter(card => card.id !== cardId);
				return {
					id: list.id,
					title: list.title,
					cards: filteredCards
				};
			}
			return list;
		});

		this.setState({ board: newBoard });
	};

	addList = title => {
		console.log("Adding list here...Title is: ", title);
		if (title !== "") {
			const temp = this.state.board;
			const mockList = {
				id: uuidv1(),
				title: title,
				cards: []
			};
			temp.push(mockList);
			this.setState({ board: temp });
		} else {
			return console.log("no. add a title");
		}
	};

	//getting title and id FROM!!! AddCard component, passed up through TrelloList
	addCard = (title, id) => {
		console.log("adding card - title is: ", title, " and id is: ", id);
		const updatedList = this.state.board.map(list => {
			if (list.id === id) {
				const tempCards = list.cards;
				tempCards.push({
					title: title,
					description: null
				});
				return {
					id: list.id,
					title: list.title,
					cards: tempCards
				};
			}
			return list;
		});
		this.setState({
			board: updatedList
		});
	};

	deleteList = id => {
		console.log("deleting list...", id);
		this.setState({
			board: this.state.board.filter(list => list.id !== id)
		});
	};

	render() {
		return (
			<div
				className="App"
				style={{ backgroundColor: this.state.backgroundColor }}
			>
				<NavBar
					color={this.state.backgroundColor}
					updateColor={this.updateColor}
					props={this.state}
				/>

				{this.state.colorPickerOpen ? <ColorPicker /> : ""}

				<div style={{ display: "flex", overflowX: "scroll" }}>
					{this.state.board.map(list => {
						return (
							<TrelloList
								addCard={this.addCard}
								list={list}
								deleteList={this.deleteList}
								deleteCard={this.deleteCard}
								cardOptions={this.cardOptions}
								key={uuidv1()}
							/>
						);
					})}
					<AddList addList={this.addList} />
				</div>
			</div>
		);
	}
}

export default App;
