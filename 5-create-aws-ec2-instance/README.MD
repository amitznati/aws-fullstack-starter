# 5. Create AWS EC2 instance

1. Go to EC2 instances (i.e.  [us-east-2](https://us-east-2.console.aws.amazon.com/ec2/v2/home?region=us-east-2#Instances:))
2. Click on **Launch instances** button
3. Select Amazon Linux 2 AMI -> Select
4. Click **Review and Launch**
5. Click **Launch**
6. Select an <b>existing key pair</b> or create a <b>new key pair</b>
7. Launch instance and give it few seconds to load
8. Check connection to the instance

https://d1ih00e1ckr8rk.cloudfront.net/aws-starter/create-ec2-instance.mp4

Use any terminal program and run this commend from the folder where the pem file downloaded

I'm using [Cmder | Console Emulator](https://cmder.net/) on window
````
ssh -i <pem file name>.pem ec2-user@<IPv4 address>
````
        
i.e.
````
ssh -i AWSKEY.pem ec2-user@3.11.161.12

λ ssh -i AWSKEY.pem ec2-user@3.11.161.12
The authenticity of host '3.11.161.12 (3.11.161.12)' can't be established.
ECDSA key fingerprint is SHA256:EgLSsdff435R76O/gVrH2W+EN+u8aGJab44LOEPWPYI.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '3.11.161.12' (ECDSA) to the list of known hosts.
Last login: Mon Jan 18 18:02:16 2021 from bzq-79-181-53-227.red.bezeqint.net

       __|  __|_  )
       _|  (     /   Amazon Linux 2 AMI
      ___|\___|___|

https://aws.amazon.com/amazon-linux-2/
[ec2-user@ip-172-31-4-214 ~]$
````

## [Next 6-load-the-code-to-instance](https://github.com/amitznati/aws-fullstack-starter/tree/master/6-load-the-code-to-instance#6-load-the-code-to-instance)




