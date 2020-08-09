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

			showsearch: false,
			showresult: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		this.setState({showsearch: true});
		this.convertaddr();
		event.preventDefault();
	}

	convertaddr(){
		let geocoder = new window.google.maps.Geocoder();
		var lat;
		var long;
		geocoder.geocode( { 'address': this.state.start}, function(results, status) {
            if (status == "OK"){
                lat = results[0].geometry.location.lat();
                long = results[0].geometry.location.lng();
                console.log(lat, long);
                //findWeather(lat, long);
            }
            else {
                alert("Geocode error: " + status)
            }
 		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} >
					<label>
					Start from: <br/>
					<input type="text" value={this.state.start} onChange={this.handleChange} className="form-inputs"/>
					</label>
					<br/>

					<label>
					Leave month: <br/>
					<input type="text" value={this.state.leavemonth} onChange={this.handleChange} className="form-inputs"/>
					</label>
					<br/>

					<label>
					Leave day: <br/>
					<input type="number" value={this.state.leaveday} onChange={this.handleChange} className="form-inputs"/>
					</label>
					<br/>

					<label>
					Leave time: <br/>
					<input type="number" value={this.state.leavetime} onChange={this.handleChange} className="form-inputs"/>
					<select value={this.state.leaveampm} onChange={this.handleChange}>
						<option value="am">am</option>
						<option value="pm">pm</option>
					</select>
					</label>
					<br/>

					<br/>
					<input type="submit" value="Find crags!" />
				</form>

				{this.state.showsearch && (
					<div>
						<h3>Searching...</h3>
					</div>
				)}

				{this.state.showresult && (
					<div>
						<h3>These places are dry:</h3>
						<p>ONE<br/>TWO<br/></p>
					</div>
				)}
			</div>
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
