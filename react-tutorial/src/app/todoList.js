import React from 'react';
import './css/todoItem.css';

export class TodoList extends React.Component{
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
	render(){
		return (
			<li>
				<div className="todo-item">
					<span className="item-name">{this.props.item}</span>
					<span className="item-delete" onClick={this.handleDelete} > x</span>
				</div>
			</li>
		);
	}
	handleDelete(){
		console.log("Clicked Here", this.props);
		this.props.onDelete(this.props.item);
	}
	componentWillUpdate(){
		console.log("willUpdate child");
	}
	componentDidMount(){
		console.log("did Mount child");
	}
	componentWillMount(){
		console.log("will mount child");
	}
}