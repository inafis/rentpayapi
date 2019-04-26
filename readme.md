#RentPayAPI Docs #

#Install NodeJS & MongoDB#
##OSX##
* Node tutorial: http://blog.teamtreehouse.com/install-node-js-npm-mac
* MongoDB tutorial: 

##SET ENVIRONMENT VARIABLES##
Create a bash script to update environment variables or modify .bashrc

```bash
export jwtSecret=randomGen
export NODE_ENV=development
```

Finally in your terminal type:

* `source ~/.bashrc -- mac and most Linux`
* `. ~/.bashrc -- Ubuntu based distros`

#Fire up the app#
* npm install
* cd client && npm install
* cd .. 
* npm start
* API & React app should now be running

#For Development#
* npm install -g nodemon
* nodemon bin/www 

#(Optional) Download MongoHub as a MONGODB GUI interface#
* https://github.com/jeromelebel/MongoHub-Mac
