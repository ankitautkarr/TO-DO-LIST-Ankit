import React, {Component} from 'react'
import './TodoElement.css'
import DatePicker from "react-datepicker";


class ToDoElement extends Component{

	constructor(props){
		super(props);	
		 this.state = {	
			date : new Date()
			}
		}
	
	
	handleChange = (event) =>{
		this.props.toggleCheckbox(event);
	}

	
	render(){

			var tempDate = this.props.todo.date.toString();
			var tempDate = tempDate.slice(0,15);
		return(

			<div className = "mainDiv1" id = {this.props.todo.date.getTime() < this.state.date.setHours(0,0,0,0) ? 'border' : 'no'}>

				<div className = "firstflex">
					<input type = "checkbox"  id={this.props.todo.id} value = {this.props.todo.complete} defaultChecked = {this.props.todo.complete} checked = {this.props.todo.complete} onChange = {this.handleChange}/>
					
				</div>

				<div className = "secondFlex">
					<h2 id = {this.props.todo.complete ? "strike" : "no"}>{this.props.todo.text}</h2>
					<h4 id = {this.props.todo.complete ? "strike" : "no"}>{this.props.todo.desc}</h4>
				</div>
				<div className = "thirdFlex">
					<h2 id = {this.props.todo.complete ? "strike" : "no"}>Due date</h2>
					<h4 id = {this.props.todo.complete ? "strike" : "no"}>{tempDate}</h4>
					<p className = {this.props.todo.date.getTime() < this.state.date.setHours(0,0,0,0) ? "no" : "hidden"} id = {this.props.todo.complete ? "strike" : "no"}> Due Date is passed </p>
					
				</div>
				<div className = "fourthFlex">
					<button className ="button1" onClick = {this.props.deleteToDO}>x</button>
				</div>
			</div>

		)
	}


}

export default ToDoElement;