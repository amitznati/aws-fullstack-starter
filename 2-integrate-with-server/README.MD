# 2. Integrate with server
   fetch posts [resource](https://www.apollographql.com/docs/react/data/queries/)

   create posts [resource](https://www.apollographql.com/docs/react/data/mutations/) 

## Client

client/src/index.js

#### Add Apollo-Client useQuery and useMutation 
````javascript
import { gql, useQuery, useMutation } from '@apollo/client';
````
#### Define posts query
````javascript
const GET_POSTS = gql`
  query {
    posts {
      title
      body
      id
   }
  }
`;
````
#### Define create post mutation
````javascript
const CREATE_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      id
      title
      body
    }
  }
`;
````
#### Post list widget
````javascript
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
````
#### Create post widget
````javascript
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
````
#### App
````javascript
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
````
### Server

server/index.js

#### Redefine the typeDefs
````javascript
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
````
#### Redefine the resolvers
````javascript
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
````
#### New fake Data
````javascript
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
````


## [Next 3-integrate-with-mongodb](https://github.com/amitznati/aws-fullstack-starter/tree/master/3-integrate-with-mongodb#3-integrate-with-mongodb)



