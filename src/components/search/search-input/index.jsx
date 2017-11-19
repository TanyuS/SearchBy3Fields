import React, {Component} from "react";

class Input extends Component {
	constructor(props) {
		super(props);
		this.changeSettings = this.props.changeSettings;
	}
	render() {
		return(
			<div className="">
				<input type="text" id="inputValue" onChange={this.changeSettings}/>
			</div>
		)
	}
}

export default Input;
