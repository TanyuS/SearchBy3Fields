import React, {Component} from "react";
import Search from "../search/index";
import FilterElement from "../filter/index";
import specialityList from "../../json/speciality.json";
import sectionList from "../../json/section.json";
import audienceList from "../../json/audience.json";

class SearchTerms extends Component {
	constructor(props) {
		super(props);
		this.changeSettings = this.props.changeSettings;
	}
	render() {
		return(
			<div>
				<Search changeSettings={this.changeSettings.bind(this)}/>
				<FilterElement type="speciality" list={specialityList} changeSettings={this.changeSettings.bind(this)}/>
				<FilterElement type="section" list={sectionList} changeSettings={this.changeSettings.bind(this)}/>
				<FilterElement type="audience" list={audienceList} changeSettings={this.changeSettings.bind(this)}/>
			</div>
		);
	}
}

export default SearchTerms;
