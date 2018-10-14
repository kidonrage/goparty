export const createEvent = (event) => {
	return (dispatch, getState,{getFirestore}) => {
		const firestore = getFirestore();
		firestore.collection('events').add({
			...event,
			authorName: "Rustam Babenko",
			authorId: 12345,
			//location: new firebase.firestore.GeoPoint(50.272450, 127.522528),
			createdAt: new Date()
		}).then(() => {
			dispatch({type: 'CREATE_EVENT_SUCCESS'});
		}).catch((err) => {
			dispatch({type: 'CREATE_EVENT_ERROR', err});
		})
	}
}