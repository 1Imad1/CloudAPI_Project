# Heroes&Villains, A school project (CLOUD PROJECT)

search and get to know your favorite Hero/Villain. <br>
used REST API's: https://superheroapi.com/api.php/api-key & https://akabab.github.io/superhero-api/api/ (to show all heroes and villains)

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
