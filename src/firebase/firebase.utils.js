import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9Nbm_K7fFiY9dnI7bPNz9y8c_wyMHVZE",
    authDomain: "mun-compscigo.firebaseapp.com",
    databaseURL: "https://mun-compscigo.firebaseio.com",
    projectId: "mun-compscigo",
    storageBucket: "mun-compscigo.appspot.com",
    messagingSenderId: "363750676567",
    appId: "1:363750676567:web:d972cbc6618ed12a3ceb12",
    measurementId: "G-0Z6VG9TNPL"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;