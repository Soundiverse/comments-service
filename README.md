# comments-profile
Creating a comments/profile section for our App

The server is listening on port 8080.

# Setup
```sh
1) Run 'npm install'   > to add all necessary dependencies
2) Run 'npm run build'  > to generate bundle.js file
3) Run 'npm run server'  > to start the server
4) Make sure mongodb is running
5) Run 'npm run seed'  > to seed the dabatabes with 10,000,000 primary entries.  
6) Open localhost:8080 on a browser, ideally Chrome.
```
# API
### GET /api/song/123/comments
```sh
Fetch all comments associated with songID 123
```
##### Response
```sh
Data Type: JSON
```
#### Example response
```sh
[
  {"songId": 30, "songTime": 2.04, "userName": "Ander Weed", "location": "San Francisco", "followers" : 0, "image" : "https://theholybucket.s3-us-west-1.amazonaws.com/projectaudibly/guest-icon.png", "text" : "Sick tune, bro!", "commentTimeStamp" : 1585693022458, "reply" : [ ], "
```

#### POST /api/song/123/comments
Create a new comment for songID 123

#### PUT /api/song/123/comments/111
Update the comment with ID 111 associated with songID 123

#### DELETE /api/song/123/comments/111
Delete comment with ID 111 associated with songID 123 


As soon as the index.html document is served statically from the server, and the main react components mount, there will be a GET request to fetch all existing data.



