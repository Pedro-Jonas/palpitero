# Routes
GET: "/users"

GET: "/guesse/:id"

GET: "/guesseUser/:userId"

DELETE: "/guesse/:id"

PUT: "/guesse/:id"
- Body: { "guesse": "0x3" }

POST: "/user"
- Body: { "name": "teste" }

POST: "/guesse"
- Body: { "userId": 1, "gameId": 1, "guesse": "5x1"}


