import React, {Component} from 'react';
import Group from '../group/index';
import SearchTerms from '../search-terms/index';
import _ from 'lodash';
import data from '../../json/full.json';
import sectionList from '../../json/section.json';
import specialityList from "../../json/speciality.json";
import audienceList from "../../json/audience.json";

class Result extends Component {
	constructor(props) {
		super(props);
		const displayedResult = data;
		const displayedSections = sectionList;

		const settings = {
			"inputValue": "",
			"specialityId": 0,
			"sectionId": 0,
			"audienceId": 0
		};
		this.state = {displayedSections, displayedResult, short: true, settings};
	}
	changeSettings(event) {
		const lists = _.flatten([sectionList, specialityList, audienceList]);
		const refreshedSettings = this.state.settings;
		const name = event.target.getAttribute('id');
		const value = event.target.value;
		const currentEle = _.find(lists, {"name": value});
		refreshedSettings[name] = currentEle.id;

	}
	render() {
		let section_ = [];
		this.state.displayedSections.map((el, i) => {
			return (section_.push({
				"section": el.name,
				"data": _.filter(this.state.displayedResult, _.matches({ "section": el.name})),
				"key": i
			}))
		});
		return(
			<div>
				<SearchTerms changeSettings={this.changeSettings.bind(this)}/>
				<div className="result">
					{
						section_.map(el => (
							<Group elements={el.data} type={el.section} short={this.state.short} key={'group_' + el.key}/>
						))
					}
				</div>
			</div>
		)
	}
}


export default Result;