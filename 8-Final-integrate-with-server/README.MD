# 8. Final! Integrate with server

Install [pm2](https://pm2.keymetrics.io/) daemon process manager 
````
npm i -g pm2
````
Start the server <small>(run from **server** directory)</small>
````
pm2 start index.js
````

We can check server logs:
````
pm2 logs
````

Configure revers proxy on NGINX

in step 4 we configure in the client the end-point of the server in production to _/graphql/_,
so when calling to the server from client the request url is: _http://ec2 public ip/graphql/_, the client and server are both sitting at the same host, hence we only need to redirect the requests to localhost with the port of our server which is _4000_
````
sudo nano /etc/nginx/nginx.conf
````

add this configuration to server
````
server {
 ...
    location /graphql/ {
          proxy_pass http://localhost:4000/;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection "upgrade";
    }
 ...
 }
````
         

Restart NGINX

         sudo systemctl restart nginx

# Our full stack application is now _app_ in the air 🚀
