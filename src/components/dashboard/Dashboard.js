import React, {Component} from 'react'
import {connect} from 'react-redux'
import EventList from '../events/EventList'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import Owl from '../layout/Owl'
import mapicon from '../../img/map.svg'

//<EventList events={events} />

class Dashboard extends Component {
	render() {
		const {events} = this.props
		return (
			<div className="dashboard">
				<div className="map-button">
					<img src={mapicon} alt=""/>
				</div>
				<Owl />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		events: state.firestore.ordered.events
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'events'}
	])
)(Dashboard)