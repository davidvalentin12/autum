import firebase from 'firebase'

let db = firebase.firestore()

class Task {
  author = '';
  name = '';
  description = '';
  intervals = [];
  state = '';

  constructor (fbRef) {
    return this
  }
}

class TaskInterval {
  start = Date();
  stop = Date();

  constructor (taskInterval) {
    return this
  }
}

export { Task, TaskInterval }
