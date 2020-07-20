const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')

const firebase = admin.initializeApp({
  apiKey: 'AIzaSyA1f7LYGv-fVuIt57UxjKZmSR-5hbgYqVA',
  authDomain: 'gift-y.firebaseapp.com',
  databaseURL: `https://gift-y.firebaseio.com/`,
  projectId: 'gift-y',
})

const { ApolloServer, gql } = require('apollo-server-express')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const typeDefs = gql`
  type Group {
    id: Int
    members: [User]
    created_String: String
    name: String
    description: String
  }
  type Event {
    id: Int
    name: String
    group: [Group]
    created_String: String
    event_String: String
    isGroupEvent: Boolean
    gift_receiver: Int
  }
  type User {
    id: Int
    name: String
    email: String
    image: String
    Wishlist: [Item]
    Groups: [Group]
    received_items: [Item]
    purchased_items: [Item]
  }

  type Item {
    id: Int
    image: String
    name: String
    price: Int
    link: String
    description: String
    created_by: Int
    created_String: String
    flags: [Flag]
    purchased_by: Int
    purchased_String: String
  }
  type Flag {
    title: String
    description: String
  }
  type Query {
    group: [Group]
    items: [Item]
    events: [Event]
  }
`

const resolvers = {
  Query: {
    group: () =>
      admin
        .database()
        .ref('group')
        .once('value')
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key])),
    items: () =>
      admin
        .database()
        .ref('items')
        .once('value')
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key])),
    events: () =>
      admin
        .database()
        .ref('events')
        .once('value')
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key])),
  },
}

const app = express()
const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app, path: '/', cors: true })
exports.graphql = functions.https.onRequest(app)
