# 1. Initiate the code

In this project the code was initiated using those guides to build basic client-server integration using [Apollo](https://apollographql.com/) for GraphQL API
   
   Client: https://www.apollographql.com/docs/react/get-started/

   Server: https://www.apollographql.com/docs/apollo-server/getting-started/

### Client:

client/src/index.js

````javascript
import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
````

Initiate Apollo-Client
````javascript
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // server host
  cache: new InMemoryCache()
});
````

App with ApolloProvider
````javascript
function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('root'));
````

### Server

This is introduction to integration! we'll change the data schema in the next step, we just want to run Apollo server and for that we need to define basic typeDefs and resolvers:
server/index.js
````javascript
const { ApolloServer, gql } = require('apollo-server');
````
Define typeDefs
````javascript
const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
        type Query {
        books: [Book]
    }
`;
````
Define Resolvers
````javascript
const resolvers = {
    Query: {
        books: () => books,
    },
};
````
Fake data
````javascript
const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];
````
Initiate and start server
````javascript
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
````
 ## [Next - 2-integrate-with-server](https://github.com/amitznati/aws-fullstack-starter/tree/master/2-integrate-with-server#2-integrate-with-server)
