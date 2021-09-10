import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBi-ZHxCZ_R6S4drAf9wA9YHkjPuIONV7c",
  authDomain: "idobatakaigi-with-ham-b56a0.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-b56a0",
  storageBucket: "idobatakaigi-with-ham-b56a0.appspot.com",
  messagingSenderId: "1089650768158",
  appId: "1:1089650768158:web:1f098470c73c57db58f10f"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({name, text}) => {
  messageRef.push({name, text})
};
