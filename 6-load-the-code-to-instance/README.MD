# 6. Load the code to instance

1. install git and clone code

update yum

    sudo yum update -y

install git

    sudo yum install git -y

clone code

    [ec2-user@ip-172-31-27-188 ~]$ mkdir app
    [ec2-user@ip-172-31-27-188 ~]$ cd app
    [ec2-user@ip-172-31-27-188 app]$ git clone https://github.com/amitznati/aws-fullstack-starter.git
    Cloning into 'aws-fullstack-starter'...
    remote: Enumerating objects: 157, done.
    remote: Counting objects: 100% (157/157), done.
    remote: Compressing objects: 100% (109/109), done.
    remote: Total 157 (delta 45), reused 147 (delta 35), pack-reused 0
    Receiving objects: 100% (157/157), 253.17 KiB | 7.03 MiB/s, done.
    Resolving deltas: 100% (45/45), done.
    [ec2-user@ip-172-31-27-188 app]$

run npm install on client and server and build client 

2. install node [resource](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)

1.Install node version manager (nvm) by typing the following at the command line. 
   
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

2.Activate nvm by typing the following at the command line.

        . ~/.nvm/nvm.sh

3.Use nvm to install the latest version of Node.js by typing the following at the command line.

        nvm install node

4.Test that Node.js is installed and running correctly by typing the following at the command line.

        node -e "console.log('Running Node.js ' + process.version)"

This displays the following message that shows the version of Node.js that is running.

Running Node.js VERSION



## [Next 7-Expose-the-app](https://github.com/amitznati/aws-fullstack-starter/tree/master/7-Expose-the-app#7-expose-the-app)


