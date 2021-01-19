# 5. Create AWS EC2 instance
![Amazon EC2](data:image/png;base64,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)

1. Go to EC2 instances (i.e.  [us-east-2](https://us-east-2.console.aws.amazon.com/ec2/v2/home?region=us-east-2#Instances:))
2. Click on **Launch instances** button
3. Select Amazon Linux 2 AMI -> Select
4. Click **Review and Launch**
5. Click **Launch**
6. Select an <b>existing key pair</b> or create a <b>new key pair</b>
7. Launch instance and give it few seconds to load
8. Check connection to the instance

use any terminal program and run this commend from the folder where the pem file downloaded

I'm using [Cmder | Console Emulator](https://cmder.net/) on window

        ssh -i <pem file name>.pem ec2-user@<IPv4 address>
i.e.

        ssh -i AWSKEY.pem ec2-user@3.12.151.11


        λ ssh -i AWSKEY.pem ec2-user@3.12.151.11
        The authenticity of host '3.12.151.11 (3.12.151.11)' can't be established.
        ECDSA key fingerprint is SHA256:EgLSsdff435R76O/gVrH2W+EN+u8aGJab44LOEPWPYI.
        Are you sure you want to continue connecting (yes/no)? yes
        Warning: Permanently added '3.12.151.11' (ECDSA) to the list of known hosts.
        Last login: Mon Jan 18 18:02:16 2021 from bzq-79-181-53-227.red.bezeqint.net
        
               __|  __|_  )
               _|  (     /   Amazon Linux 2 AMI
              ___|\___|___|
        
        https://aws.amazon.com/amazon-linux-2/
        [ec2-user@ip-172-31-4-214 ~]$
