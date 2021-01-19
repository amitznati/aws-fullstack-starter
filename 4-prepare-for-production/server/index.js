const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');
const  dotenv = require('dotenv');
dotenv.config();

// Mongoose
const PostModel = mongoose.model('Post', {
	title: String,
	body: String
});

// GraphQL
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
		posts: () => PostModel.find(),
	},
	Mutation: {
		createPost: async (parent, {title, body}) => {
			const post = new PostModel({title, body});
			await post.save();
			console.log('post created: ', post);
			return post;
		}
	}
};


const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(
	process.env.DB_URL,
	{useNewUrlParser: true, useUnifiedTopology: true})
	.then(function() {
		console.log('mongoose connected!');
		server.listen().then(({ url }) => {
			console.log(`🚀  Server ready at ${url}`);
		});
	});


