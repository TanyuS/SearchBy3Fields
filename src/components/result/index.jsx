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
			"speciality": 0,
			"section": 0,
			"audience": 0
		};
		this.state = {displayedSections, displayedResult, short: true, settings};
	}
	changeSettings(event) {
		const lists = _.flatten([sectionList, specialityList, audienceList]);
		const refreshedSettings = this.state.settings;
		const oldSettings = JSON.stringify(this.state.settings);
		const name = event.target.getAttribute('id');
		const value = event.target.value;
		const currentEle = _.find(lists, {"name": value});

		refreshedSettings[name] = currentEle.id;
		this.setState({settings: refreshedSettings});
		this.runFilter(oldSettings);
	}
	runFilter(oldSettings) {
		const curSettings = this.state.settings;
		let filterData = data,
			counter = 0,
			specialityMatch = '{}',
			sectionMatch = '{}',
			audienceMatch = '{}';
		for (var el in curSettings) {
			const curId = curSettings[el];
			switch(el) {
				case 'speciality':
					if (curId == 0) {
						specialityMatch = '{}';
					} else {
						const speciality = specialityList.filter((l) => {
							return (l.id == curId);
						});
						specialityMatch = '{"' + el + '":"' + speciality[0].name + '"}';
					}
					break;

				case 'section':
					if (curId == 0) {
						sectionMatch = '{}';
					} else {
						const section = sectionList.filter((l) => {
							return (l.id == curId);
						});

						sectionMatch = '{"' + el + '":"' + section[0].name + '"}';
					}
					break;

				case 'audience':
					if (curId == 0) {
						audienceMatch = '{}';
					} else {
						const audience = audienceList.filter((l) => {
							return (l.id == curId);
						});

						audienceMatch = '{"' + el + '":"' + audience[0].name + '"}';
					}
					break;

				default:
					break;
			}
			counter++;
		}
		const totalFilter = Object.assign(JSON.parse(specialityMatch), JSON.parse(sectionMatch), JSON.parse(audienceMatch));
		filterData = _.filter(filterData, _.matches(totalFilter));
		this.setState({
			displayedResult: filterData
		});
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