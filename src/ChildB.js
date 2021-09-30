import React from 'react'


// LifeCycle methods - Class based Component 
class ChildB extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			temp :false
		}
	}

	render(){

		return(
			<div>
				<input type = "button"  onClick = { () => { this.setState({temp: !this.state.temp}) } }  value = "Toggle" />
				{this.state.temp ? <div>This is True </div> : <div> This is false </div>} 
			</div>
		)
	}
}

export default ChildB