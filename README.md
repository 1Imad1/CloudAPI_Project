# A school project
CloudAPI project for college 2018-2019. Calling an open API from the internet. Displayed Everything in an Ionic web application. The main objective is to learn about API's and creating one. You get extra credit for being creative so.. you have to make the project your own

# The project...
To be creative i had to think about what i like, so i like everything about comics and the movies of the comics (marvel universe and dc) also anime just anything that has to do with villains and heroes, so i used an API that gets every information that it contains from every hero or villain.. (that of course is available in the API of the person who created it)

So i created a web application that gives you a list of villains and heroes in one page where you can searched by name or id, when you do this it returns a card that gives you little information about the hero or villain you searched. For more info you had to press the i button, this will take you to an other page where you get every information it contains. The other part was that i had to create my own API, so i created an Trivia API. The trivia API contains question i created that are about the heroes and villains i get from the API i used from the internet, you can add, edit or delete a question. Of course you get a score back when you got a question right.

Heroes&Villains: search and get to know your favorite Hero/Villain. <br>
used REST API's: https://superheroapi.com/api.php/api-key & https://akabab.github.io/superhero-api/api/ (to show all heroes and villains)

# What i learned
* Working with Google Cloud Platform
* EF Core
* .NET core 2.2
* Calling APIs
* JWT Authentication
* Auth0
* POST, PUT, DELETE calls with a Bearer token through Angular Https.

# Authentication provider used: Auth0

Own API: https://cloudapi-241723.appspot.com/api/trivia (Login first to get access)

GET All:  https://cloudapi-241723.appspot.com/api/trivia <br>
POST:  https://cloudapi-241723.appspot.com/api/trivia <br>

By id: <br>
GET:  https://cloudapi-241723.appspot.com/api/trivia/(id) <br>
DELETE:  https://cloudapi-241723.appspot.com/api/trivia/(id) <br>
PUT:  https://cloudapi-241723.appspot.com/api/trivia/(id)

# You can Sort by questions:

default sort staat op asc: alphabetical order <br>
  Sort by question: https://cloudapi-241723.appspot.com/api/trivia?sort=questions

desc: aflopende volgorde <br>
  Sort by question: https://cloudapi-241723.appspot.com/api/trivia?sort=questions&dir=desc

# search in the api

GET https://cloudapi-241723.appspot.com/api/trivia?questions=(a question from the list)

# Paging
GET https://cloudapi-241723.appspot.com/api/trivia?page=0&lenght=4
