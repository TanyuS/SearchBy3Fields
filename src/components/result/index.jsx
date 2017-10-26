import React, {Component} from 'react';
import Group from '../group/index';
import _ from 'lodash';
import data from '../../json/full.json';
import sections from '../../json/section.json';

class Result extends Component {
	constructor(props) {
		super(props);
		this.state = {short: true};
	}
	render() {
		let section_ = [];

		sections.map((el) => {
			return (section_.push({
				"section": el.name,
				"data": _.filter(data, _.matches({ "section": el.name}))
			}))
		});
		return(
			<div className="result">
				{
					section_.map(el => (
						<Group elements={el.data} type={el.section} short={this.state.short}/>
					))
				}
			</div>
		)
	}
}


export default Result;