const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

exports.createUser = functions.auth.user().onCreate((user) => {
  let uid = user.uid
  return db.collection("users").doc(uid).set({
    name: user.displayName || user.email,
    email: user.email,
    author: uid
  })
});

exports.removeUser = functions.auth.user().onDelete((user, context) => {
  let uid = user.uid;
  return db.collection("users").doc(uid).delete()
});
