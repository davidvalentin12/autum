import firebase from 'firebase';
import { Client } from '@/domain/client/entity.js';

let db = firebase.firestore()

const ClientFactory = {
  getUserClients (onUpdate) {
    let clients = db.collection('clients')
    let userUid = firebase.auth().currentUser.uid
    let userClients = []
    console.log(userUid)

    return clients
      .where('author', '==', userUid)
      .onSnapshot(function (querySnapshot) {
        if (!querySnapshot.empty) {
          userClients = []
          querySnapshot.forEach(function (doc) {
            userClients.push(new Client().init(doc))
          })
          onUpdate(userClients)
        } else {
          console.log('No clients found')
          onUpdate(userClients)
        }
      })
  }
}

export { ClientFactory }
