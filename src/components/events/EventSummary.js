import React from 'react'

const EventSummary = ({event}) => {
	return (
		<div className="event-item">
			<span>{event.title}</span>
			<p>{event.desc}</p>
		</div>
	)
}

export default EventSummary