# noted

From the folks that brought you "simon (ambient edition)" (lol) comes noted – an app that allows a user to create an account, login, and build and track their own recommended record collection. 

This collection is designed to log any albums the user has intended to listen to. Once the user has given a listen through, they are encouraged to write a "liner note" – a review of the album comprised of a rating (1-10), a "standout track", and additional personal thoughts. 

Currently, additional features of the app include monthly record recommendations and a compiled playlist of the users' "standout tracks".

## Technology Used

The following technology was used in order to create this application:

* HTML
* CSS
* JavaScript
* Node.js
* MongoDB
* Mongoose
* Express
* Cors
* Bcrypt
* JSON Web Token
* Passport-JWT

## ERD Diagram

![ERD Diagram](/images/ERD%20Diagram.png)

## Routes Table

|   NAME    |           PATH          |   HTTP VERB   |                 PURPOSE                 |
| --------- | ----------------------- | ------------- | --------------------------------------- |
|  Index    |  /records               |   GET         | Displays all records in collection      |
|  Show     |  /records/:id           |   GET         | Shows a specific record (by record id)  |
|  Create   |  /records               |   POST        | Creates a new record                    |
|  Update   |  /records/:id           |   PATCH       | Updates a specific record (by record id)|
|  Delete   |  /records/:id           |   DELETE      | Deletes a specific record (by record id)|
|  Create   |  /liner-notes           |   POST        | Create a liner note attached to a specific record                         |
|  Update   |  /liner-notes/:id       |   PATCH       | Updates a liner note attached to a specific record (by sub-doc/record id)  |
|  Delete   |  /liner-notes/:id       |   DELETE      | Deletes a liner note (by sub-doc id)    |
|  Create   |  /sign-up               |   POST        | Creates a new user                      |
|  Create   |  /sign-in               |   POST        | Creates/bcrypts user token, grants user access to all SPA contents/containers |