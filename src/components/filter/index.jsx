import React, {Component} from "react";
import FilterOption from "./filter-option/index";
import "./filter.less";

class FilterElement extends Component {
	render() {
		const {list, name} = this.props;
		return(
			<select>
				{
					list.map(el => (
						<FilterOption text={el} name={el}/>
					))
				}
			</select>
		);
	}
}

export default FilterElement;
