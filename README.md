
# Alaya mern dev challenge 


In this project which is a MERN stack you can write and edit post blog.

This application is composed by 2 repositories, the server and the client:

- In the server repository you can find an express HTTP server that connect to a local mongo database and expose
the api.
To start the server be sure to have installed mongoDB locally as a service then go in the server repository and launch the index.js
```$xslt
    cd server
    npm i
    node index.js
```
If you want to restart the server at any change you can also install nodemon and start the server like this
```
    cd server
    npm i
    npm i -g nodemon
    nodemon index.js
```
- In the client repository you have the Front-end code of the blog that uses React and Redux.
To start the Front-end
```
    cd client
    npm i
    npm start
```


## Show us your skills :)

To show us your skills we would like you to build theses 2 things:

### 1 - User account management

At first we want the users to be able to create their account to post Articles.

To do that you need to create a login page or dialog and a signup process.

We want you to use JWT to manage user session https://jwt.io/, to do that you can use passport with a JWT policy.

Only connected users will be able to create post, and only the author of the post will be able to delete it

### 2 - User onboarding guide

Here when the user has finished to create his account we want the application to provide an interactive guide to explain him
how works the blog.

Free to you to implement the concept you want.

Note that the guide has to be accessible again if the user wants.

Good luck :)

_Notes: For evaluation, we will mainly focus on the code structure and readability, the separation of responsibilities in the methods/components, and the visual consistency._
