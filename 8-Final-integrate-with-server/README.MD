# 8. Final! Integrate with server

#### install [pm2](https://pm2.keymetrics.io/) daemon process manager 
   
         npm i -g pm2

####  start the server <small>(run from **server** directory)</small>

         pm2 start index.js

we can check server logs:
   
         pm2 logs

#### configure revers proxy on NGINX

         sudo nano /etc/nginx/nginx.conf

   add this configuration to server

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

#### restart NGINX

         sudo systemctl restart nginx

# Our full stack application is now _app_ in the air 🚀
