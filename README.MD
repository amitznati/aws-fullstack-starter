# 7. Expose the app

1. install [NGINX](https://www.nginx.com/) load balance [resource](https://regbrain.com/article/node-nginx-ec2)

        sudo yum install nginx

    You will get a warning command to install AWS curated Nginx package - great, that's what we need!

        sudo amazon-linux-extras install nginx1


2. allow income http request from anywhere to our server

    2.1 go to EC2 instance and click on the instance id link
    
    2.2 in the down section select **Security** tab

    2.3 click on the **Security groups** link

    2.4 click on **Edit inbound rules** in the **inbound rules** tab

    2.5 click on **Add rule**

    2.6 select type **HTTP** and **anywhere** for the source

    2.7 **Save changes**


3. restart nginx

        sudo systemctl restart nginx

    our NGINX default html should be expose now in http://<Public-IPv4-address> 


4. create a directory at /usr/share/<domain-name>
   
        sudo mkdir /usr/share/aws-blog.com
        -- take ownership on this directory --
        sudo chown -R $USER:$USER /usr/share/aws-blog.com


5. copy client build

        cp -r build/* /usr/share/aws-blog.com/

6. change nginx configuration

    original configuration
        
        ...
        server {
           ...
           root         /usr/share/nginx/html;
           ...
        }
        ...

    change to

        ...
        server {
           ...
           root         /usr/share/aws-blog.com;
           ...
        }
        ...

7. restart NGINX

        sudo systemctl restart nginx

**Our client** should be expose now in http://<Public-IPv4-address> 
