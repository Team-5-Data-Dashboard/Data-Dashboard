import React from 'react';

class DashCompontent extends React.Component {
	render(){
		return (
			<div className="dashcomp-container">
				<div className="dashcomp-head">
					<div className="dashcomp-head-title">
						8 tasks completed out of 10
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
					<div
						className="dashcomp-calendar"
					>
						<h1
							className="dashcomp-calendar-header"
						>
							23 December, Sunday
						</h1>
						<ul
							className="dashcomp-calendar-week"
						>
							<li>
								<div
									className="dashcomp-calendar-weekday"
								>
									Sun
								</div>
								<div
									className="dashcomp-calendar-datenum"
								>
									23
								</div>
							</li>
							<li>
								<div
									className="dashcomp-calendar-weekday"
								>
									Mon
								</div>
								<div
									className="dashcomp-calendar-datenum"
								>
									24
								</div>
							</li>
							<li>
								<div
									className="dashcomp-calendar-weekday"
								>
									Tue
								</div>
								<div
									className="dashcomp-calendar-datenum"
								>
									25
								</div>
							</li>
							<li>
								<div
									className="dashcomp-calendar-weekday"
								>
									Wed
								</div>
								<div
									className="dashcomp-calendar-datenum"
								>
									26
								</div>
							</li>
							<li>
								<div
									className="dashcomp-calendar-weekday"
								>
									Thu
								</div>
								<div
									className="dashcomp-calendar-datenum"
								>
									27
								</div>
							</li>
							<li>
								<div
									className="dashcomp-calendar-weekday"
								>
									Fri
								</div>
								<div
									className="dashcomp-calendar-datenum"
								>
									28
								</div>
							</li>
							<li>
								<div
									className="dashcomp-calendar-weekday"
								>
									Sat
								</div>
								<div
									className="dashcomp-calendar-datenum"
								>
									29
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default DashCompontent;