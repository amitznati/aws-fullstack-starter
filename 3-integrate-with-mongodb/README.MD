# 3. Integrate with mongoDB

In this tutorial we're using mongoDB for a database, you can use any SQL/NOSQL database, 

Create a new database using Atlas-mongoDB  [here](https://www.mongodb.com/) or use existing database

### Server
#### Add [mongoose](https://mongoosejs.com/) to dependencies
Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
```
npm i mongoose
```
server/index.js
````javascript
const mongoose = require('mongoose');
````
Define Post Model
````javascript
const PostModel = mongoose.model('Post', {
    title: String,
    body: String
});
````
Change the resolvers
````javascript
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
````
Connect to mongoDB and then start server
````javascript
const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(
    'mongodb+srv://amitznati:<password>@cluster0.smxxf.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function() {
        console.log('mongoose connected!');
        server.listen().then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        });
    });
````      
            
            
## [Next 4-prepare-for-production](https://github.com/amitznati/aws-fullstack-starter/tree/master/4-prepare-for-production#4-prepare-for-production)




