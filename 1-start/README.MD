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
            type Post { 
                title: String!
                body: String!
                id: ID!
            }
            type Query {
                posts: [Post]
            }
            type Mutation {
                createPost(title: String!, body: String!): Post
            }
        `;

Define resolver

    const resolvers = {
        Query: {
            posts: () => posts,
        },
        Mutation: {
            createPost: (parent, args) => {
                console.log(args);
            }
        }
    };

Fake posts for start

        const posts = [
            {
                title: 'The Awakening',
                body: 'Kate Chopin',
                id: '1111'
            },
            {
                title: 'City of Glass',
                body: 'Paul Auster',
                id: '1112'
            },
        ];


Initiate and start server

    const server = new ApolloServer({ typeDefs, resolvers });
    
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
