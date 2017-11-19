import React, {Component} from "react";
import "./search.less";
import Input from "./search-input/index"

class Search extends Component {
	constructor(props) {
		super(props);
		this.changeSettings = this.props.changeSettings;
	}
	render() {
		return(
			<div className="">
				<div className="search">
					<div className="search__title">Search the Academy by keyword:</div>
					<Input changeSettings={this.changeSettings.bind(this)}/>
				</div>
			</div>
		)
	}
}

export default Search;
