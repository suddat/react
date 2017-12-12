import React from 'react';
import ReactDOM from 'react-dom';

/*class ToDo extends React.Component{
	render(){
		return (
			<div>
				<p>Had to {this.props.list.name}</p>
				<p>have you {this.props.list.checked} ?</p>
				<p>No I Did, {this.props.list.notChecked}</p>				
			</div>
		);
	}
}

var listTo = {name:"check eggs", checked:'checked', notChecked: "not check"};

ReactDOM.render(
	<ToDo list={listTo} />,
	document.getElementById('todo')
);*/

/*class ToDo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nos : ['first', 'second', 'third']
		};
		this.makeStateChange = this.makeStateChange.bind(this);
	}
	makeStateChange(){
		console.log('before change==>', this.state.nos);
		this.state.nos[1] = 'Fifth';
		this.setState({
			nos: this.state.nos
		});
	}
	componentDidUpdate(){
		console.log(this.state);
	}
	render(){
		let no = this.map((item, index) => {
			return <li>{item}</li>;
		});
		return (
			<div>
				<ul>
					<li>{this.state.nos[0]}</li>
					<li>{this.state.nos[1]}</li>
					<li>{this.state.nos[2]}</li>
				</ul>
				<button onClick={this.makeStateChange}>Change Second</button>
			</div>
		);
	}
}

ReactDOM.render(
	<ToDo />,
	document.getElementById('todo')
);
*/

class ToDo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nos : ['first', 'second', 'third', 'Sixth']			
		};
		this.makeStateChange = this.makeStateChange.bind(this);
	}
	makeStateChange(){
		console.log('before change==>', this.state.nos);
		this.state.nos[1] = 'Fifth';
		this.setState({
			nos: this.state.nos
		});
	}

	render(){
		var no = this.state.nos;
		no = no.map((item, index) => {
			return (
				<TodoList item={item} key={index} onDelete={this.onDelete} />
			);
		});
		return (
			<div>
				<ul>{no}</ul>
				<button onClick={this.makeStateChange}>Change Second</button>
			</div>
		);
	}

	onDelete(item){
		var newTodoList = this.state.nos.filter(function(val, index){
			return item !== val;
		});
		this.setState({
			nos: newTodoList
		});
	}
}

class TodoList extends React.Component{	
	render(){
		return (
			<li>
				<div className="todo-item">
					<span className="item-name">{this.props.item}</span>
					<span className="item-delete" onClick={this.handleDelete} > => x</span>
				</div>
			</li>
		);
	}
	handleDelete(){
		console.log("Clicked Here", this.props);
		//this.props.onDelete(this.props.item);
	}
}

ReactDOM.render(
	<ToDo />,
	document.getElementById('todo')
);