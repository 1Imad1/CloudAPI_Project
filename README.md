# A school project
CloudAPI project for college 2018-2019. Calling an open API from the internet. Displayed Everything in an Ionic web application. The main objective is to learn about API's and creating one. 

You get extra credit for being creative, so i like everything about comics (marvel universe and dc) also anime just anything that has to do with villains and heroes, so i used an API that gets every information that it contains from a hero or villain.. i present to you

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
