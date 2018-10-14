const initState = {
	events: [
		{id:'1', title: 'Вечеринка за гаражами', desc: 'Бла-бла-бла'},
		{id:'2', title: 'Хакатон', desc: 'Бла-бла-бла'},
		{id:'3', title: 'Гуляем, бухаем, Шурыгина пати', desc: 'Бла-бла-бла'}
	]
}

const eventReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_EVENT':
			console.log('created event', action.event);
			return state;
		case 'CREATE_EVENT_ERROR':
			console.log('create event error', action.err);
			return state;
		default:
			return state;
	}
}

export default eventReducer;