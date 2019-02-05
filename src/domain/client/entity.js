import firebase from 'firebase'

let db = firebase.firestore()

class Client {
  constructor () {
    this.author = firebase.auth().currentUser.uid

    return this
  }

  create (name, description) {
    let self = this
    let clients = db.collection('clients')
    clients.add({
      author: this.author,
      name: name,
      description: description,
      projects: [],
      createdAt: new Date().getTime()
    })
      .then(function (docRef) {
        self.ref = docRef
      })
      .catch(function (error) {
        console.error('Error adding document: ', error)
      })

    return this
  }

  init (doc) {
    this.doc = doc

    this.data = doc.data()

    return this
  }

  // get (uid) {
  //   let self = this
  //   this.ref.get(uid)
  //     .then(function (docRef) {
  //       self.init(docRef)
  //     })
  //     .catch(function (error) {
  //       console.error('Error getting document: ', error)
  //     })
  // }
}

export { Client }
