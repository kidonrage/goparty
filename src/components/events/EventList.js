import React from 'react'
import EventSummary from './EventSummary'


const EventList = ({events}) => {
	return (
		<div className="event-list">
			{events && events.map(event => {
				return (
					<EventSummary event={event} key={event.id} />
				)
			})}
		</div>
	)
}

export default EventList