<div align="center">
<img src="./images/noted-header.png">
</div>

#

<div align="center">

## <a href="https://noted.world/">Click to Demo</a>

## :pencil: Description

<p>From the folks that brought you 'simon (ambient edition)' comes 'noted' – a minimal single-page application that allows users to build and track their own recommended record collection. Noted is designed to log any albums the user has intended to listen to. Once the user has given a listen through, they are encouraged to write a "liner note" – a review of the album comprised of a rating (1-10), a "standout track", and additional personal thoughts. Currently, additional features of the app include monthly record recommendations and a compiled playlist of the users' "standout tracks".</p>

</div>

 <div id="document" align="left">
  
  ## :camera_flash: Screenshots
  
  <details><summary>Login</summary><img src="./images/noted-login.png"></img></details>

  <details><summary>Signup</summary><img src="./images/noted-sign-up.png"></img></details>

  <details><summary>My Recommended Records / Dashboard</summary><img src="./images/noted-index-records.png"></img></details>

  <details><summary>Record View</summary><img src="./images/noted-show-create-update-delete.png"></img></details>

  <details><summary>Standouts Mix</summary><img src="./images/noted-mix.png"></img></details>

  <details><summary>Rec of the Month</summary><img src="./images/noted-monthly-rec.png"></img></details>

## :computer: Technologies Used

![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5)
![CSS3](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=css3)
![Bootstrap](https://img.shields.io/badge/-bootstrap-05122A?style=flat&logo=bootstrap)
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)
![Express](https://img.shields.io/badge/-Express-05122A?style=flat&logo=express)
![MongoDB](https://img.shields.io/badge/-MongoDB-05122A?style=flat&logo=mongodb)
![Mongoose](https://img.shields.io/badge/-mongoose-05122A?style=flat&logo=mongoose)
![JWT](https://img.shields.io/badge/-JSON_Web_Token-05122A?style=flat&logo=jsonwebtokens)
![Markdown](https://img.shields.io/badge/-Markdown-05122A?style=flat&logo=markdown)
![dotenv](https://img.shields.io/badge/-dotenv-05122A?style=flat&logo=dotenv)
![Heroku](https://img.shields.io/badge/-Heroku-05122A?style=flat&logo=heroku)
![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)
![Github](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)
![VSCode](https://img.shields.io/badge/-VS_Code-05122A?style=flat&logo=visualstudio)
![bcrypt](https://img.shields.io/badge/-bcrypt-05122A?style=flat&logo=bcrypt)
![CORS](https://img.shields.io/badge/-CORS-05122A?style=flat&logo=CORS)

## :cd: How To Use

🎵 What are you listening to? 🎶

1. `Create An Account` by using the Create An Account button at the bottom of the page.
2. Fill out the form and once completed click the `Sign Up` button to login.
3. Upon login, users will be navigated to the Dashboard / 'My Recommended Records' page, where they can view their current record collection.
4. `Click` the 'Add New Record' button at the very bottom of the page to add a new record.
5. Access a specific record's information & liner notes by `clicking` the 'Show Record' button underneath that album.
6. After listening to an album, add a 'liner note' to give the record a 1-10 rating, a 'standout track', and write any additional thoughts.
7. `Choose` any one of the icons in the navbar to navigate each page respectively.
8. The musical note icon leads users to the 'Standouts Mix' page, where they'll find all their Standout tracks from each album in one place.
9. `Click` the keyboard icon to see which album noted creator Eddie Hernandez is recommending this month on the 'Rec of the Month' page, and even add it to your own collection!

## :world_map: Design

<details closed>
    <summary>Entity Relational Diagram (ERD)</summary>
  <img src="./images/erd-diagram.png"></img>
</details>

<details closed>
  <summary> Deployed Link (Heroku)</summary>
  <a href="https://noted.world/"
    > Noted Website</a>
</details>

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