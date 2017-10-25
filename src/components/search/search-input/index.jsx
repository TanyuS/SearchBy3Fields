import React, {Component} from "react";

class Input extends Component {
	render() {
		return(
			<div className="">
				<input type="text" onChange={this.handleChange}/>
			</div>
		)
	}
	handleChange(event) {
		const searchQuery = event.target.value.toLowerCase();
		/*const displayedContacts = CONTACTS.filter(function(el) {
			const searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});

		this.setState({
			displayedContacts: displayedContacts
		});*/
	}
}

export default Input;
