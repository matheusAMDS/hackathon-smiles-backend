# +Milhas (Backend)
  Backend do app +Milhas, produzido durante o Hackathon Smiles.

# Tecnologias
- NodeJS
- Typescript
- MongoDB
- Autenticação JWT

# Requisitos

1. NodeJS 12 (LTS)
2. MongoDB
3. Yarn

# Instalação
```bash
yarn
```

# Configurações

Checar o arquivo .env.example . É necessário uma conta no serviço Cloudinary para upload de arquivos.

# Rodando

```bash
yarn build
```

Em seguida, o comando: 
```bash
yarn start
```

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

A aplicação irá rodar em http://localhost:PORT
