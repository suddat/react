import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './todoList';
import {AddItem} from './addItem';
import './css/index.css';
import {Route,Router} from 'react-router';
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
			nos : ['first', 'second', 'third', 'Sixth', 'seventh']			
		};
		this.makeStateChange 	= this.makeStateChange.bind(this);
		this.onDelete  			= this.onDelete.bind(this);
		this.handleAdd  		= this.handleAdd.bind(this);
	}
	makeStateChange(){
		console.log('before change==>', this.state.nos);
		this.state.nos[1] = 'Fifth';
		this.setState({
			nos: this.state.nos
		});
	}
	handleAdd(item){
		var exist_list = this.state.nos;
		exist_list.push(item);
		this.setState({
			nos: exist_list
		});
	}

	componentWillUpdate(){
		console.log("willUpdate parent", this.state.nos);
	}
	componentDidMount(){
		console.log("did Mount parent");
	}
	componentWillMount(){
		console.log("will mount parent");
	}

	render(){
		var no = this.state.nos;
		console.log("in render");
		no = no.map((item, index) => {
			return (
				<TodoList item={item} key={index} onDelete={this.onDelete} />
			);
		});
		return (
			<div id="todo-list">
				<ul>{no}</ul>
				{/*<button onClick={this.makeStateChange}>Change Second</button>*/}
				<AddItem handleAdd = {this.handleAdd} />
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

ReactDOM.render(
	<ToDo />,
	document.getElementById('todo')
);