import React, {Component} from 'react';
import style from './group-ele.less';

class GroupElement extends Component {
	render() {
		const {info} = this.props;

		const media = info.media;
		const title = info.title;
		const text = info.text;
		return(
			<div className="group-ele">
				<img className="group-ele__pic" src={media}/>
				<div className="group-ele__title">
					{title}
				</div>
				<div className="group-ele__text">
					{text}
				</div>
			</div>
		)
	}
}


export default GroupElement;