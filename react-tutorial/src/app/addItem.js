import React from 'react';
import './css/addCss.css';
export class AddItem extends React.Component{
	constructor(props){
		super(props);
		this.addToList = this.addToList.bind(this);
	}
	addToList(e){
		e.preventDefault();
		this.props.handleAdd(this.refs.newItem.value);
		console.log(this.refs.newItem.value);
		this.refs.newItem.value = '';
	}
	render(){
		return(
			<form id="add-item" onSubmit={this.addToList}>
				<input type="text" ref="newItem" />
				<input type="submit" value="Add Me" />
			</form>
		);
	}
}