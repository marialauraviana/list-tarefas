import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBmyKncuVzTCjUmdNn6yGE6NwQp6Acv3Uk",
    authDomain: "todo-list-vue-92f80.firebaseapp.com",
    projectId: "todo-list-vue-92f80",
    storageBucket: "todo-list-vue-92f80.appspot.com",
    messagingSenderId: "548762271172",
    appId: "1:548762271172:web:ae9fd19afb1e97426f3891"
  };
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth() 
const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')
export {
      db, auth, profileCollection,tasksCollection, 
  }