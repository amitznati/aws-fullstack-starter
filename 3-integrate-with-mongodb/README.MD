# 3. Integrate with mongoDB

install local mongoDB from [here](https://www.mongodb.com/try/download/community?tck=docs_server)

### Client

no change

### Server
Add mongoose to dependencies 

        npm i mongoose

server/index.js

        const mongoose = require('mongoose');

Define Post Model

        const PostModel = mongoose.model('Post', {
            title: String,
            body: String
        });

Change the resolvers

        const resolvers = {
            Query: {
                posts: () => PostModel.find() // fetching from db 
            },
            Mutation: {
                createPost: async (parent, {title, body}) => {
                    // saving in db
                    const post = new PostModel({title, body});
                    await post.save();
                    console.log('post created: ', post);
                    return post;
                }
            }
        };

Connect to mongoDB and then start server

        const server = new ApolloServer({ typeDefs, resolvers });
        
        mongoose.connect(
            'mongodb://localhost:27017/awsblog',
            {useNewUrlParser: true, useUnifiedTopology: true})
            .then(function() {
                console.log('mongoose connected!');
                server.listen().then(({ url }) => {
                    console.log(`🚀  Server ready at ${url}`);
                });
            });
