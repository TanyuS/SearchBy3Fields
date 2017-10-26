import React, {Component} from "react";
import SearchTerms from '../../../../components/search-terms/index';
import Result from '../../../../components/result/index';


class HomePage extends Component {
	render() {
		return (
			<div className="">
				<SearchTerms/>
				<Result/>
			</div>
		);
	}
}

export default HomePage;