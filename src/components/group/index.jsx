import React, {Component} from 'react';
import GroupElement from '../group-element/index';
import style from './group.less'

class Group extends Component {
	constructor(props) {
		super(props);
		const {elements, type, short} = props;
		this.state = {elements, type, short};

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({short: !this.state.short});
	}
	render() {
		return(
			<div className="group">
				<div className="group__title">
					{this.state.type}
				</div>
				<div className="group__content">
					{
						this.state.elements.map((el, i) => {
							if (this.state.short == true && i >= 3) return false;
							return(
								<GroupElement info={el}/>
							)
						})
					}
				</div>
				<div className="group__btn" onClick={this.handleClick}>
					{ this.state.short == true ? 'View more' : 'Hide' }
				</div>
			</div>
		)
	}
}


export default Group;