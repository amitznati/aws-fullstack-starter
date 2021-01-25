# 4. prepare for production

### Client

Change the server URL based on env mode

We'll use _/graphql/_ endpoint for the server in production because our client and server will be on same host,
we'll just redirect any requests with _/graphql/_ to our server that live on other port by revers proxy in NGINX configuration (Step 8)

#### client/src/index.js
````javascript
const isDev = process.env.NODE_ENV === 'development';
const client = new ApolloClient({
    uri: isDev ? 'http://localhost:4000/graphql' : '/graphql/',
    cache: new InMemoryCache()
});
````
### Server

Change the db connection string based on env mode

Install dotenv so we can use custom env variables
````
npm i dotenv
````
Add .env file to server folder and set variable
````dotenv
DB_URL=mongodb+srv://<user>:<password>@cluster0.smxxf.mongodb.net/<dbname>
````
Consume env variables
````javascript
const dotenv = require('dotenv');
dotenv.config();
````
Use env variable for DB URL
````javascript
mongoose.connect(
    process.env.DB_URL,// using env variable
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function() {
        console.log('mongoose connected!');
        server.listen().then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
    });
});
````

## [Next 5-create-aws-ec2-instance](https://github.com/amitznati/aws-fullstack-starter/tree/master/5-create-aws-ec2-instance#5-create-aws-ec2-instance)


