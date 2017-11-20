import React, {Component} from 'react';
import Group from '../group/index';
import SearchTerms from '../search-terms/index';
import _ from 'lodash';
import data from '../../json/full.json';
import sectionList from '../../json/section.json';
import specialityList from "../../json/speciality.json";
import audienceList from "../../json/audience.json";
import './result.less'

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
		const name = event.target.getAttribute('id');

		let currentEle;
		if(name === 'inputValue') {
			refreshedSettings[name] = event.target.value;
		} else {
			currentEle = _.find(lists, {"name": event.target.value});
			refreshedSettings[name] = currentEle.id;
		}

		this.setState({settings: refreshedSettings});
		this.runFilter();
	}
	runFilter() {
		const curSettings = this.state.settings;
		console.log(this.state);
		let filterData = data,
			filterSection = sectionList,
			specialityMatch = '{}',
			sectionMatch = '{}',
			inputMatch = '',
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
						filterSection = sectionList;
					} else {
						const section = sectionList.filter((l) => {
							return (l.id == curId);
						});

						sectionMatch = '{"' + el + '":"' + section[0].name + '"}';
						const sectionMatchFilter = '{"name":"' + section[0].name + '"}';
						filterSection = _.filter(filterSection, _.matches(JSON.parse(sectionMatchFilter)));
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

				case 'inputValue':
					inputMatch = curId;
					break;

				default:
					break;
			}
		}

		const totalFilter = Object.assign(JSON.parse(specialityMatch), JSON.parse(sectionMatch), JSON.parse(audienceMatch));

		filterData = _.filter(filterData, _.matches(totalFilter));
		filterData = this.filterByInputText(filterData, inputMatch);

		this.setState({
			displayedResult: filterData,
			displayedSections: filterSection,
		});
	}

	filterByInputText(data, text) {
		if(text === '') {
			return data;
		} else {
			console.log('data', data);
			return (
				_.filter(data, function(item){
					return ((item.title.indexOf(text) > -1) || (item.text.indexOf(text) > -1))
				})
			)
		}
	}
	render() {
		let section_ = [];
		this.state.displayedSections.map((el) => {
			return (section_.push({
				"section": el.name,
				"data": _.filter(this.state.displayedResult, _.matches({ "section": el.name})),
				"key": el.name
			}))
		});
		return(
			<div className="wrapper">
				<SearchTerms changeSettings={this.changeSettings.bind(this)}/>
				<div className="result">
					{
						section_.map(el => {
							if (el.data.length > 0) {
								return <Group elements={el.data} type={el.section} short={this.state.short} key={'group_' + el.key}/>
							}
						})
					}
				</div>
			</div>
		)
	}
}


export default Result;