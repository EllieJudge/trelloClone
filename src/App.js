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
				title: "Title zero",
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

	swapBoxes = (fromList, toList) => {
		let board = this.state.board.slice();
		let fromIndex = -1;
		let toIndex = -1;

		for (let i = 0; i < board.length; i++) {
			if (board[i].id === fromList.id) {
				fromIndex = i;
			}
			if (board[i].id === toList.id) {
				toIndex = i;
			}
		}

		if (fromIndex != -1 && toIndex != -1) {
			let { fromId, ...fromRest } = board[fromIndex];
			let { toId, ...toRest } = board[toIndex];
			board[fromIndex] = { id: fromList.id, ...toRest };
			board[toIndex] = { id: toList.id, ...fromRest };

			this.setState({ board: board });
		}
	};

	/* The dragstart event is fired when the user starts dragging an element or text selection */
	/* event.target is the source element : that is dragged */
	/* Firefox requires calling dataTransfer.setData for the drag to properly work */
	handleDragStart = data => event => {
		let fromList = JSON.stringify({ id: data.id });
		event.dataTransfer.setData("dragContent", fromList);
	};

	/* The dragover event is fired when an element or text selection is being dragged */
	/* over a valid drop target (every few hundred milliseconds) */
	/* The event is fired on the drop target(s) */
	handleDragOver = data => event => {
		event.preventDefault(); // Necessary. Allows us to drop.
		return false;
	};

	/* Fired when an element or text selection is dropped on a valid drop target */
	/* The event is fired on the drop target(s) */
	handleDrop = data => event => {
		event.preventDefault();

		let fromList = JSON.parse(event.dataTransfer.getData("dragContent"));
		let toList = { id: data.id };

		this.swapBoxes(fromList, toList);
		return false;
	};

	makeBoxes = () => {
		return (
			<div style={{ display: "flex", overflowX: "scroll" }}>
				{this.state.board.map(list => (
					<div
						draggable="true"
						onDragStart={this.handleDragStart({ id: list.id })}
						onDragOver={this.handleDragOver({ id: list.id })}
						onDrop={this.handleDrop({ id: list.id })}
					>
						<TrelloList
							addCard={this.addCard}
							list={list}
							deleteList={this.deleteList}
							deleteCard={this.deleteCard}
							cardOptions={this.cardOptions}
							key={uuidv1()}
						/>
					</div>
				))}
				<AddList addList={this.addList} />
			</div>
		);
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
				{this.makeBoxes()}
			</div>
		);
	}
}

export default App;
