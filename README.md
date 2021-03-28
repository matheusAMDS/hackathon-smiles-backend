## Rotas

- POST /auth/signin -> email, password
- POST /auth/signup -> name, email, password, avatar?, location

- GET /topic

- GET /quiz/:topic -> topic._id | 'all' (Ex: /quiz/605f9b729e76f108f8e0d92f) [AUTH]

- GET /post [AUTH]
- GET /post/:id [AUTH]

- POST /quiz/result -> code, responses[] [AUTH]
  Ex: `
    "code": "iiofejf9028jf9j8f9k2392jf9j",
    "responses": [
      {
        "question": "jfeifjew98j9928jf83j9afef",
        "answer": "Rio de Janeiro - RJ"
      }
    ]
  `
- GET /me -> [AUTH]