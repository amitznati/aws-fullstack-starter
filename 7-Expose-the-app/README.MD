# 7. Expose the app

#### install [NGINX](https://www.nginx.com/) load balance [resource](https://regbrain.com/article/node-nginx-ec2)
````
sudo yum install nginx
````

You will get a warning command to install AWS curated Nginx package - great, that's what we need!
````
sudo amazon-linux-extras install nginx1
````

#### allow income http request from anywhere to our server

  1. go to EC2 instance and click on the instance id link

  2. in the down section select **Security** tab

  3. click on the **Security groups** link

  4. click on **Edit inbound rules** in the **inbound rules** tab

  5. click on **Add rule**

  6. select type **HTTP** and **anywhere** for the source

  7. **Save changes**


restart nginx
````
sudo systemctl restart nginx
````
#### Our NGINX default html should be expose now in our Public-IPv4-address 
   
   
Create a directory at /usr/share/<domain-name>
````
sudo mkdir /usr/share/aws-blog.com
-- take ownership on this directory --
sudo chown -R $USER:$USER /usr/share/aws-blog.com
````
Copy client build
````
cp -r build/* /usr/share/aws-blog.com/
````
Change nginx configuration
   
original configuration
````
...
server {
    ...
    root         /usr/share/nginx/html;
    ...
}
...
````
change to
````
...
server {
    ...
    root         /usr/share/aws-blog.com;
    ...
}
...
````
Restart NGINX
````
sudo systemctl restart nginx
````
#### **Our client** should be expose now in our Public-IPv4-address 


## [Next 8-Final-integrate-with-server](https://github.com/amitznati/aws-fullstack-starter/tree/master/8-Final-integrate-with-server#8-final-integrate-with-server)



