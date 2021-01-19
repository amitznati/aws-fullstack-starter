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


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
