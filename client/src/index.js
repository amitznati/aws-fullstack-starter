import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_POSTS = gql`
    query {
        posts {
            title
            body
            id
        }
    }
`;

const CREATE_POST = gql`
    mutation createPost($title: String!, $body: String!) {
        createPost(title: $title, body: $body) {
            id
            title
            body
        }
    }
`;

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

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
