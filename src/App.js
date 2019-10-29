import React, { Component } from "react";
import "./App.css";
import List from "./Components/List/List";

class App extends Component {
	state = {
		board: [
			{
				title: "Title one",
				cards: [
					{
						title: "Card one",
						description: "This is description for card one"
					},
					{
						title: "Card two",
						description: null
					}
				]
			},
			{
				title: "NOT Food",
				cards: [
					{
						title: "Cheese",
						description: null
					},
					{
						title: "Chicken",
						description: null
					},
					{
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
				title: "Animals",
				cards: [
					{
						title: "Dog",
						description: "Woof."
					},
					{
						title: "Cat",
						description: "Meow."
					},
					{
						title: "Chicken",
						description: "pocooock"
					},
					{
						title: "Cow",
						description: "moooo"
					}
				]
			}
		]
	};

	addList = () => {
		console.log("Adding list here...");
		const temp = this.state.board;
		const mockList = {
			title: "Mock Title",
			cards: [
				{
					title: "SUCCESS",
					description: "Content"
				}
			]
		};

		temp.push(mockList);

		this.setState({
			board: temp
		});
	};

	render() {
		console.log("State in App: ", this.state);
		return (
			<div className="App">
				<header className="App-header">
					<h1>Trello</h1>
					<div style={{ display: "flex" }}>
						{this.state.board.map(list => {
							return <List list={list} />;
						})}
					</div>
					<button onClick={this.addList}>Add list</button>
				</header>
			</div>
		);
	}
}

export default App;
