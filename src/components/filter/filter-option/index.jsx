import React, {Component} from "react";

class FilterOption extends Component {
	render() {
		const {text, name} = this.props;
		console.log("filter option", text, name);
		return(<option name={name}>{text}</option>);
	}
}

export default FilterOption;
