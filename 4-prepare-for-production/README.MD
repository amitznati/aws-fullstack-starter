# 4. prepare for production

### Client

change the server URL based on env mode

client/src/index.js

        const isDev = process.env.NODE_ENV === 'development';
        const client = new ApolloClient({
            uri: isDev ? 'http://localhost:4000/graphql' : '/graphql/',
            cache: new InMemoryCache()
        });

### Server

change the db connection string based on env mode

install dotenv so we can use custom env variables

        npm i dotenv
add .env file to server folder and set variable

        DB_URL=mongodb+srv://<user>:<password>@cluster0.smxxf.mongodb.net/<dbname>
consume env variables

        const dotenv = require('dotenv');
        dotenv.config();

use env variable for DB URL

        mongoose.connect(
            process.env.DB_URL,// using env variable
            {useNewUrlParser: true, useUnifiedTopology: true})
            .then(function() {
                console.log('mongoose connected!');
                server.listen().then(({ url }) => {
                    console.log(`🚀  Server ready at ${url}`);
            });
        });
