import "firebase/firestore";
import firebase from "firebase/app";
import {collectionData} from 'rxfire/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBcG_HAsA2joaHFU58MbdkRALhbKVDJk6E",
    authDomain: "svelte-blog-8dff4.firebaseapp.com",
    databaseURL: "https://svelte-blog-8dff4.firebaseio.com",
    projectId: "svelte-blog-8dff4",
    storageBucket: "svelte-blog-8dff4.appspot.com",
    messagingSenderId: "795426028685",
    appId: "1:795426028685:web:4f9be542e4975c7360f6c4"
});

const firestore = firebase.firestore(app);
export {app,firestore,collectionData};
export default firebase;
