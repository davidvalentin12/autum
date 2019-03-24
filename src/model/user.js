import firebase from 'firebase'

let db = firebase.firestore()
let users = db.collection('users')

class User {
  authUid = '';
  email = '';
  name = '';
  clients = [];
  projects = [];
  tasks = [];

  constructor (uid) {
    return this
  }
}

export { User }
