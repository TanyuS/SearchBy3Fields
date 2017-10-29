import React, {Component} from "react";
import FilterOption from "./filter-option/index";
import "./filter.less";

class FilterElement extends Component {

	constructor(props) {
		super(props);
		const {list, type} = props;
		this.state = {list, type};
		this.changeSettings = this.props.changeSettings;
	}
	render() {
		return(
			<select id={this.state.type} onChange={this.changeSettings}>
				{
					this.state.list.map(el => (
						<FilterOption text={el.name} name={el.id} key={'fo_' + el.id}/>
					))
				}
			</select>
		);
	}
}

export default FilterElement;
