# aws-full-stack-starter

Small starter project for demonstrate full-stack architecture on Amazon cloud platforms
the project contain:
Client:

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [Apollo-Client](https://www.apollographql.com/docs/react/)

Server:

- [Apollo-Server](https://www.apollographql.com/docs/apollo-server/)

# Steps
## 1. Prepare the code

   in this project the code was initiated using those guides:
   
   Client: https://www.apollographql.com/docs/react/get-started/

   Server: https://www.apollographql.com/docs/apollo-server/getting-started/

### Client:

#### Integrate server
   fetch posts [resource](https://www.apollographql.com/docs/react/data/queries/)

   create posts [resource](https://www.apollographql.com/docs/react/data/mutations/) 

   result client/src/index.js:

        import React from 'react';
        import { render } from 'react-dom';
        import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
        import { gql, useQuery, useMutation } from '@apollo/client';
        
        // Define posts query

        const GET_POSTS = gql`
          query {
            posts {
              title
              body
              id
           }
          }
        `;

        // Define create post mutation

        const CREATE_POST = gql`
          mutation createPost($title: String!, $body: String!) {
            createPost(title: $title, body: $body) {
              id
              title
              body
            }
          }
        `;

        // Apollo-Client initiate

        const client = new ApolloClient({
          uri: 'http://localhost:4000/graphql',
          cache: new InMemoryCache()
        });

        // Post list widget

        function PostsList() {
        const { loading, error, data, refetch } = useQuery(GET_POSTS);
        
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
        
            return (
                <>
                    <button onClick={() => refetch()}>Refetch!</button>
                    {data.posts.map((post) => (
                        <div>
                            <h3>{post.title}</h3>
                            <div>{post.body}</div>
                        </div>
                    ))}
                </>
        
            );
        }

        // Create post widget

        function CreatePost() {
          const [createPost] = useMutation(CREATE_POST);
          const [title, setTitle] = React.useState('');
          const [body, setBody] = React.useState('');
          return (
            <div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  createPost({ variables: { title, body } });
                  setBody('');
                  setTitle('');
                }}
              >
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <label>Body</label>
                <input type="text" value={body} onChange={e => setBody(e.target.value)} />
                <button type="submit">Add Post</button>
              </form>
            </div>
          );
        }

        // App

        function App() {
          return (
            <ApolloProvider client={client}>
              <div>
                <h2>My first Apollo app 🚀</h2>
                <CreatePost />
                <PostsList />
              </div>
            </ApolloProvider>
          );
        }

        render(<App />, document.getElementById('root'));


### Server

results server/index.js

        const { ApolloServer, gql } = require('apollo-server');

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

        const server = new ApolloServer({ typeDefs, resolvers });

        server.listen().then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        });


