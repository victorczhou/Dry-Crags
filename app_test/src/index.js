import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyForm extends React.Component {
	constructor(props) {
		super(props);
		var today = new Date();
		var todaymonth = today.getMonth();
		var todaydate = today.getDate();

		this.state = {
			start: "UCLA", 
			leavemonth: todaymonth,
			leaveday: todaydate,
			leavetime: 5,
			leaveampm: "pm",
			time: 1, 
			// add max grade
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
				Start from: <br/>
				<input type="text" value={this.state.start} onChange={this.handleChange} />
				</label>
				<br/>
				<input type="submit" value="Find crags!" />
			</form>
		);
	}
}

class Page extends React.Component {
	render(){
		return (
			<div>
			<h1 style={{fontFamily: "Georgia", fontSize: "60px"}}>Is it raining?</h1>
			<MyForm />
			</div>
		);
	}
}

ReactDOM.render(
	<Page />,
	document.getElementById('root')
	);
