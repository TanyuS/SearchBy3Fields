import React, {Component} from "react";
import FilterElement from "../filter/index";
import "./filters.less";
import specialityList from "../../json/speciality.json";
import sectionList from "../../json/section.json";
import audienceList from "../../json/audience.json";

class FilterGroup extends Component {

	constructor(props) {
		super(props);
		const {list, type} = props;
		this.state = {list, type};
		this.changeSettings = this.props.changeSettings;
	}
	render() {
		return(
			<div className="filters">
				<div className="filters__title">
					Filter content by:
				</div>

				<FilterElement type="speciality" list={specialityList} changeSettings={this.changeSettings.bind(this)}/>
				<FilterElement type="section" list={sectionList} changeSettings={this.changeSettings.bind(this)}/>
				<FilterElement type="audience" list={audienceList} changeSettings={this.changeSettings.bind(this)}/>
			</div>
		);
	}
}

export default FilterGroup;
