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
  { 
    "songId": 30001,
    "messageId": 1982,
    "userInfo": {
        "id": 1221, 
        "name": "Ander Weed", 
        "location": "San Francisco", 
        "followers" : 2, 
        "picUrl" : "https://theholybucket.s3-us-west-1.amazonaws.com/projectaudibly/guest-icon.png"
    },  
    "text" : "Sick tune, bro!", 
    "commentTimeStamp" : 1585693022458, 
    "replies" : [ ]
  },
  { 
    "songId": 30001,
    "messageId": 1986,
    "userInfo": {
        "id": 122231, 
        "name": "Deluxo34", 
        "location": "Detroit", 
        "followers" : 185, 
        "picUrl" : "https://theholybucket.s3-us-west-1.amazonaws.com/projectaudibly/guest-icon.png"
    },  
    "text" : "I loved this baseLine, right here!", 
    "commentTimeStamp" : 1585965547716, 
    "replies" : [
        { 
            "messageId": 1986,
            "userInfo": {
                "id": 122231, 
                "name": "Deluxo34", 
                "location": "Detroit", 
                "followers" : 189345, 
                "picUrl" : "https://theholybucket.s3-us-west-1.amazonaws.com/projectaudibly/guest-icon.png"
            },  
            "text" : "I agree, this baseLine is pure butter!", 
            "commentTimeStamp" : 1585965654472
        }
    ]
  }
] 
```

#### POST /api/song/123/comments
Create a new comment for songID 123

#### PUT /api/song/123/comments/111
Update the comment with ID 111 associated with songID 123

#### DELETE /api/song/123/comments/111
Delete comment with ID 111 associated with songID 123 


As soon as the index.html document is served statically from the server, and the main react components mount, there will be a GET request to fetch all existing data.



