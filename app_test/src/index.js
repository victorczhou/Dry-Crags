import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//const KEY = REACT_APP_GKEY;
//const WKEY = REACT_APP_WKEY;
//const MPKEY = REACT_APP_MPKEY;
const GKEY = "AIzaSyDRw3ERq-3qMhR6jywEv94hcpP8ZzDfDzs" // quota'd and site restricted
const WKEY = "4af0779321ecfde78a7c8185b611182c"
const MPKEY = "&key=200175868-ec4e9a92dabd127918e609bf7985e5b2"
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class MyForm extends React.Component {
	constructor(props) {
		super(props);
		var today = new Date();
		var todaymonth =  months[today.getMonth()];
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
		alert("Submitted");
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

				<label>
				Leave month: <br/>
				<input type="text" value={this.state.leavemonth} onChange={this.handleChange} />
				</label>
				<br/>

				<label>
				Leave day: <br/>
				<input type="number" value={this.state.leaveday} onChange={this.handleChange} />
				</label>
				<br/>

				<label>
				Leave time: <br/>
				<input type="number" value={this.state.leavetime} onChange={this.handleChange} />
				<select value={this.state.leaveampm} onChange={this.handleChange}>
					<option value="am">am</option>
					<option value="pm">pm</option>
				</select>
				</label>
				<br/>

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
