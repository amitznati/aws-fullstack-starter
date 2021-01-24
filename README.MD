# Full-Stack application from scratch to production | Part 1


In those days there a more companies that offering free full-stack architecture, ready to use within few clicks

those architectures often offer: Authentication,Storage, REST/GraphQL API, DB, Client hosting, cloud functions, notification manager and more

i.e.
mongoDB Realm, Google Firebase, Amazon Amplify:
![Amazon-Amplify](http://d1ih00e1ckr8rk.cloudfront.net/aws-starter/full-stack-offers.png)

Sound good? it's getting complex...

Usually the API is very basic and strict to the data model, if you want to expose some REST that do other things then just query the DB, 
you'll need load custom functions.
this process is usually complex and you find yourself working herder to customize the framework then create this infrastructure by yourself.  

In this tutorial we're going to build this infrastructure manually from scratch and **FREE***. <small>(within the free tier policy of AWS)</small>

This tutorial is the first part out of 4:

### Part 1
Initiate basic blog application, React application that integrate with nodeJS server include mongoDB.
We'll load this application to Amazon EC2 instance and expose the application to the world.

### Part 2
Create upload files mechanize using Amazon S3 + Amazon CloudFront with fast DNS distribution, adding authentication using Amazon Cognito Identity to authenticate users.

### Part 3
Styling and refactor the application, make it full functional blog application

### Part 4
Build mobile hybrid application for Android and IOS using Apache Cordova, add push notifications service

## Part 1 using:

[React](https://reactjs.org/),     [Apollo-Client](https://www.apollographql.com/docs/react/get-started/),      [Apollo-Server](https://www.apollographql.com/docs/apollo-server/getting-started/),      [Atlas-mongoDB](https://www.mongodb.com/),   [NGINX](https://www.nginx.com/),  [pm2](https://pm2.keymetrics.io/)

and **[Amazon EC2](https://aws.amazon.com/ec2/)**

![full-stack](https://d1ih00e1ckr8rk.cloudfront.net/resources/images/uploaded-images/60088ca683216f18e2f27bc5.png)


### pre-requirement before start

- Amazon account
- terminal software with ability to connect with SSL


## Steps

1. [start](https://github.com/amitznati/aws-fullstack-starter/tree/master/1-start)
2. [integrate with server](https://github.com/amitznati/aws-fullstack-starter/tree/master/2-integrate-with-server)
3. [integrate with mongoDB](https://github.com/amitznati/aws-fullstack-starter/tree/master/3-integrate-with-mongodb)
4. [prepare for production](https://github.com/amitznati/aws-fullstack-starter/tree/master/4-prepare-for-production)
5. [create aws ec2 instance](https://github.com/amitznati/aws-fullstack-starter/tree/master/5-create-aws-ec2-instance)
6. [load the code to instance](https://github.com/amitznati/aws-fullstack-starter/tree/master/6-load-the-code-to-instance)
7. [expose the code](https://github.com/amitznati/aws-fullstack-starter/tree/master/7-Expose-the-app)
8. [integrate with server](https://github.com/amitznati/aws-fullstack-starter/tree/master/8-Final-integrate-with-server)
