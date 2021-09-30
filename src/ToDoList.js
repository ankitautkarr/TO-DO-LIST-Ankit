import React from 'react'
import TodoForm from './TodoForm'
import ToDoElement from './ToDoElement'
import './TodoList.css'

class ToDoList extends React.Component{
	constructor(props){
	super(props);  
	this.state = {
		todos: [], 		//todo array
		todoToShow :'all',	// helper variable
		ToggleAllComplete : true // helper variable to toggle state
		
		};

	}

	//this function add todo in todo array
	addTodo = todo => {
		
		this.setState({
			todos : [todo, ...this.state.todos]
		})
	}

	//this function change the complete or not state in todo array
	toggleCheckbox = (id) =>{
		this.setState({
			todos: this.state.todos.map(todo => {
				if(todo.id === id){
					return {
						...todo,
						complete : !todo.complete
					}
				}
				else {
					return todo;
				}

			})
		})
	}

	//this function update helper variable 
	updateTodoToShow = (s)=>{
		this.setState({
			todoToShow : s
		})
	}


	// this function delete todo from todos array
	handleDelete = (id)=>{
		this.setState({
			todos : this.state.todos.filter(todo => todo.id !== id)
		});
	}

	// this fuction delete all completed todo from todos array
	handleRemoveAllComplete = (id)=>{
		this.setState({
			todos : this.state.todos.filter(todo => !todo.complete)
		});
	}


	// render function of react
	render(){
		let todos = []; // temp helper variable

		// this if else ladder filter all todos based on todoToShow variable
		if (this.state.todoToShow === 'all') {
			todos = this.state.todos;
		} else if(this.state.todoToShow === 'active'){
			todos = this.state.todos.filter(todo => !todo.complete);
		} else if(this.state.todoToShow === 'complete'){
			todos = this.state.todos.filter(todo => todo.complete);
		}

		console.log(this.state.todos);
		return(

		<>

		
			<TodoForm onSubmit = {this.addTodo} />

			<br/><br/>

			{todos.map(todo =>(
				<ToDoElement key={todo.id}
				 toggleCheckbox = {() => this.toggleCheckbox(todo.id)}
				 deleteToDO = {() => this.handleDelete(todo.id)}
				 todo = {todo} />
					

			))}

			

			<br/><br/>
			<div className = "temp">
				<button className = "button" onClick = {() => this.updateTodoToShow('all')}>All</button>
				<span> </span>
				<button className = "button" onClick = {() => this.updateTodoToShow('active')}>Active</button>
				<span> </span>
				<button className = "button" onClick = {() => this.updateTodoToShow('complete')}>Completed</button>
				
				
			{this.state.todos.some(todo => todo.complete) ? (
				<div>
				<button className = "buttonAll" onClick = {this.handleRemoveAllComplete}>
					RemoveAllCompletedTODO
					</button>
				</div>) : null
			}


			<div>
				<button className = "button" onClick = {() => this.setState({
					todos: this.state.todos.map(todo =>({
						...todo,
						complete: this.state.ToggleAllComplete
					})),
					ToggleAllComplete : !this.state.ToggleAllComplete
				})}>
				ToggleAllComplete : {`${this.state.ToggleAllComplete}`}</button>
			</div>
				
			</div>

		
		</>

		)
	}
}

export default ToDoList;