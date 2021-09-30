import React from 'react'
import ShortID from 'shortid'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './TodoForm.css'

class TodoForm extends React.Component{
	// simple state variable local to this file only
	state = {
		text:'',
		desc:'',
		startDate: new Date()
	}

	// this function set value of text and desc depends on name
	handleChange = (event) =>{
		this.setState({
			[event.target.name] : event.target.value
		})
	}

	// this function set date
	handleChange2 = date => {
    this.setState({
      startDate: date
    });
  };

  	// this function add value to todo and called parent call back function
	handleSubmit = (event) => {
		event.preventDefault();

		if(this.state.text === "" || this.state.desc === ""){
			alert("PLease enter TODO and Description");
		} else {

				this.props.onSubmit({
					id : ShortID.generate(), 
					text : this.state.text,
					desc : this.state.desc,
					complete : false,
					date : this.state.startDate
				})

		}
		this.setState({text:''})
		this.setState({desc:''})
		this.setState({startDate : new Date()})

	}

	// render function of react 
	render(){

		return(

			<div className = "inputDiv">

					<form onSubmit={this.handleSubmit}>

						<input className = "todoInput"
							name = "text"
							value = {this.state.text}
							placeholder = "What Do you want to Do..."
							onChange={this.handleChange}/>
						<span>  </span>
						<button className = "addButton" onClick = {this.handleSubmit}>Add TODO</button>
						<p></p>

						<input className = "todoInput"
							name = "desc"
							value = {this.state.desc}
							placeholder = "Enter description here"
							onChange ={this.handleChange}/>

						<span> </span>
						<small className = "label1">Enter Due Date </small>
						<DatePicker className = "date"
		        			selected={this.state.startDate}
		        			onChange={this.handleChange2} />
					
					</form>

			

			</div>
		)
	}
}

export default TodoForm;