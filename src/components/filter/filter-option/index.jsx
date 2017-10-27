import React, {Component} from "react";

class FilterOption extends Component {
	constructor(props) {
		super(props);
		const {text, name} = this.props;
		this.state = {text, name};
	}
	render() {

		return(<option name={this.state.name}>{this.state.text}</option>);
	}
}

export default FilterOption;
