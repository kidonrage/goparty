import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDR_VVIBGrZzl_ovkGZyNYGnaAFL_pv_4I",
	authDomain: "goparty-61de7.firebaseapp.com",
	databaseURL: "https://goparty-61de7.firebaseio.com",
	projectId: "goparty-61de7",
	storageBucket: "goparty-61de7.appspot.com",
	messagingSenderId: "385797530368"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;