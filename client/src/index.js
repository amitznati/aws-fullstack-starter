import React from 'react';
import { render } from 'react-dom';
import {CssBaseline, Container} from '@material-ui/core';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {BrowserRouter as Router} from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './layout/Routes';


const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});
const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];
function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Header title="Blog" sections={sections} />
                    <Routes />
                    <Footer title="Footer" description="Something here to give the footer a purpose!" />
                </Container>
            </Router>
        </ApolloProvider>
    );
}

render(<App />, document.getElementById('root'));
