import React from 'react';
import './App.css';
import ToDoList from './ToDoList'
import ChildB from './ChildB'

//Main App component
class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			totalValue : 0
		}
	}

  render(){ 
      return (
      	 <div className="App">
          <h1><span className = "styling">TODO</span>List</h1> 

          <ToDoList />
          
         
        </div>

      )
	}
}

export default App;
