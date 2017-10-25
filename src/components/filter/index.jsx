import React, {Component} from "react";
import FilterOption from "./filter-option/index";
import "./filter.less";

class FilterElement extends Component {
	render() {
		const {list, type} = this.props;
		return(
			<select id={type}>
				<FilterOption text={'All ' + type} name="0"/>
				{
					list.map(el => (
						<FilterOption text={el.name} name={el.id}/>
					))
				}
			</select>
		);
	}
}

export default FilterElement;
