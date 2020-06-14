import React from 'react';
import PaneInfo from '../components/paneInfo';
import PaneMap from '../components/paneMap';

class MapComponent extends React.Component {
	render(){
		return(
			<div className="container-map">
				<PaneInfo />
				<PaneMap />
		    </div>
		)
	}
}

export default MapComponent;