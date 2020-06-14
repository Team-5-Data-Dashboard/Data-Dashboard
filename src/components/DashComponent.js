import React from 'react';
import dashCompBody from './DashComponentBody.js';

class DashCompontent extends React.Component {
	render(){
		return (
			<div className="dashcomp-container">
				<div className="dashcomp-head">
					<div className="dashcomp-head-title">
						{this.props.headline}
					</div>
					<div className="dashcomp-head-filter">
						Show:&nbsp;
						<a
							href="https://google.com"
						>
							This week
						</a>
					</div>
				</div>
				<div
					className="dashcomp-body"
				>
					{dashCompBody(this.props.compType)}
				</div>
			</div>
		);
	}
}

export default DashCompontent;