import React, {Component} from "react";
import Search from "../search/index";
import FilterGroup from "../filter-group/index";
import "./settings.less";

class SearchTerms extends Component {
	constructor(props) {
		super(props);
		this.changeSettings = this.props.changeSettings;
	}
	render() {
		return(
			<div className="settings">
				<Search changeSettings={this.changeSettings.bind(this)}/>
				<FilterGroup changeSettings={this.changeSettings.bind(this)}/>
			</div>
		);
	}
}

export default SearchTerms;
