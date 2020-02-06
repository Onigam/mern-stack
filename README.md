
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

To show us your skills we would like you to build at least one of theses 2 features:

### 1 - Add geolocation to post creation and display it on post element (Full-stack)

The purpose is to be able to attach a geolocation by entering an address in the `PostCreatWidget`,
 to persit it in the `post.js` mongoose model and then to display it using the `PostListItem.js`

For the geocoding you can use the api you want (like [nominatim](https://wiki.openstreetmap.org/wiki/Nominatim) for [openstreetmap](https://www.openstreetmap.org/#map=5/46.449/2.210) 
or [google maps](https://developers.google.com/maps/documentation/geocoding/start)).

It would be perfect if we can store at least one gps location and one address in database by post.

You can maybe use the [MongoDB geospatial api](https://docs.mongodb.com/manual/geospatial-queries/) to format your data

### 2 - Add comments and likes on posts

We want to be able to make a comment and to like each post.

The user that comments will have to put an author name and a message in the comment form. 

These informations will be stored in DB using mongoose.

The comment button has to be on the post list and the list of comments has to be on the post page.

For the likes (anonymous) we will have a counter beside the like button to display the number of likes ( stored in DB ).

*Note that we don't have connected user so this test is more to see how you implement the logic*


### 3 - Filter the posts

Add a filtering component which can sort posts by relevance.

The filter allows the user to enter
 - simple text
 - a location (point) and a radius

Determine how to score the results by proximity and text matching.

The posts are returned in order of relevance, according to the score of each result.

Use mongoose for the aggregation.


_Notes: For evaluation, we will mainly focus on the code structure and readability, the separation of responsibilities in the methods/components, and the visual consistency._
