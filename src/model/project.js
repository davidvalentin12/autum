import firebase from 'firebase'

let db = firebase.firestore()

class Project {
  author = '';
  name = '';
  deadline = Date();
  status = '';
  tasks = []
  client = '';

  constructor (uid) {
    return this
  }
}

export { Project }
