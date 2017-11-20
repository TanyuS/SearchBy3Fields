import React, {Component} from "react";
import './search-input.less'

class Input extends Component {
	constructor(props) {
		super(props);
		this.changeSettings = this.props.changeSettings;
	}
	render() {
		return(
			<div className="search-input-block">
				<input className="search-input" type="text" id="inputValue" onChange={this.changeSettings}/>
			</div>
		)
	}
}

export default Input;
