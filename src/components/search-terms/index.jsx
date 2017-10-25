import React, {Component} from "react";
import Search from "../search/index";
import FilterElement from "../filter/index";
import specialityList from "../../json/speciality.json";
import sectionList from "../../json/section.json";
import audienceList from "../../json/audience.json";

class SearchTerms extends Component {
	render() {
		return(
			<div>
				<Search/>
				<FilterElement name="speciality" list={specialityList}/>
				<FilterElement name="section" list={sectionList}/>
				<FilterElement name="audience" list={audienceList}/>
			</div>
		);
	}
}

export default SearchTerms;
