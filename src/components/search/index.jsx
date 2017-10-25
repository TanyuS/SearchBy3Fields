import React, {Component} from "react";
import "./search.less";
import Input from "./search-input/index"

class Search extends Component {
	render() {
		return(
			<div className="">
				<div className="search">
					<div className="search__title">Search the Academy by keyword:</div>
					<Input />
				</div>
			</div>
		)
	}
}

export default Search;
