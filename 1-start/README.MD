# 1. Initiate the code

   in this project the code was initiated using those guides:
   
   Client: https://www.apollographql.com/docs/react/get-started/

   Server: https://www.apollographql.com/docs/apollo-server/getting-started/

### Client:

client/src/index.js

    import React from 'react';
    import { render } from 'react-dom';
    import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

initiate Apollo-Client

    const client = new ApolloClient({
      uri: 'http://localhost:4000/graphql', // server host
      cache: new InMemoryCache()
    });
    
App with ApolloProvider

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


### Server

server/index.js

        const { ApolloServer, gql } = require('apollo-server');

Define typeDefs

        const typeDefs = gql`
            type Book {
                title: String
                author: String
            }
                type Query {
                books: [Book]
            }
        `;

Define Resolvers


    const resolvers = {
        Query: {
            books: () => books,
        },
    };

Fake data


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

Initiate and start server

    const server = new ApolloServer({ typeDefs, resolvers });
    
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
    
    
 ## [Next - 2-integrate-with-server](https://github.com/amitznati/aws-fullstack-starter/tree/master/2-integrate-with-server#2-integrate-with-server)
