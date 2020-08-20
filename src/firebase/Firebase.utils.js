import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD80w5kGUrdqJDUCDrxz9qSF2xOUrj-yzo',
	authDomain: 'crwn-db-b9f53.firebaseapp.com',
	databaseURL: 'https://crwn-db-b9f53.firebaseio.com',
	projectId: 'crwn-db-b9f53',
	storageBucket: 'crwn-db-b9f53.appspot.com',
	messagingSenderId: '331620132595',
	appId: '1:331620132595:web:9b7b971a7e8f78f9947986',
	measurementId: 'G-JDN6KTDF1B'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`); // holds information for id  - referance object

	const snapShot = await userRef.get(); //  pulling snapshot object from position in database

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
