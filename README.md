## Rotas

- POST /auth/signin -> email, password
- POST /auth/signup -> name, email, password, avatar?, location

- GET /topic

- GET /quiz/:topic -> topic._id | 'all' (Ex: /quiz/605f9b729e76f108f8e0d92f) [AUTH]

- GET /post [AUTH]
- POST /post -> (multipart_data) title, content, thumbnail [AUTH]

- POST /quiz/result -> code [AUTH]

- GET /me -> [AUTH]