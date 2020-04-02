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
### GET - method
### Endpoint:  /api/songs/:songID/comments
```sh
Fetch all comments associated with a specific songID

Note: Each comment might have nested similar object which correspond to the replies. While Comments and their respetctive replies have separate POST request routes, both are pulled together with this same GET request.
```
#### Response
```sh
Data Type: JSON
```
##### Example response
```sh
[
  { 
    "songId": 30001,
    "commentId": 1982,
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
    "commentId": 1986,
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
            "commentId": 1986,
            "replyID": 1,
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


### POST - method
### Endpoint:  /api/songs/:songID/comments
Create a new comment assiated with a specific songID

#### Request
```sh
Expected request body type: JSON
```
##### Example request body
```sh
{
  "userId": 1221, 
  "text" : "The sound quality is magical", 
  "commentTimeStamp" : 1585693022458  
}
```


### POST - method
### Endpoint:  /api/songs/:songID/comments/:commentID/replies
Create a new reply for a specific commentID associated with unique songID

#### Request
```sh
Expected request body type: JSON
```
##### Example request body
```sh
{
  "userId": 4334, 
  "text" : "+1", 
  "commentTimeStamp" : 15856911478954  
}
```


### PUT - method
### Endpoint:  /api/songs/:songID/comments/:commentID
Update a specific comment associated with a unique songID

#### Request
```sh
Expected request body type: JSON
```
##### Example request body
```sh
{ 
  "text" : "+2", 
  "commentTimeStamp" : 15856911413342  
}
```


### DELETE - method
### Endpoint:  /api/songs/:songID/comments/:commentID
Delete a specific comment associated with a unique songID 

#### Request
```sh
No request body required.
```



