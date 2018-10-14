import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapTest extends Component {
	render() {
		return (
				<Map 	
					google={this.props.google}
					zoom={15} 
					style={{width: '82%', height: '100vh'}}
					disableDefaultUI = {true}
					initialCenter={{
						lat: 50.272450, 
						lng: 127.522528
					}}
					zoomControl={false}>
 					<Marker onClick={this.onMarkerClick}
				 		name={'Current location'} />
					<InfoWindow onClose={this.onInfoWindowClose}>
					</InfoWindow>
				</Map>
		)
	}
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCDykcR2-wA6XMDEiUPlGuTjuYKbUyIf4g")
})(MapTest)