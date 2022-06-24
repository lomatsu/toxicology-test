# toxicology-test
The application consists of a service that receives data from a toxicological sample to verify if a report is positive or negative and saves it in the database.

Para rodar local você precisará seguir os seguintes passos:

  - Criar imagem: docker pull postgres
  - Listar imagens: docker images

  - Rodar container e exportar a porta: docker run --name toxicology -e POSTGRES_PASSWORD=1234@mudar -d -p 5432:5432 postgres

  - Entrar no bash: docker exec -it ''id do container'' bash

  - Entrar no postgres: psql -U postgres

  - Criar base de dados: CREATE DATABASE toxicology;

  Após isso, deverá rodar o comando "npm run knex:migrate" para criação de todas as tabelas necessárias.



  # DescoClass (Back end)

O Toxicology é uma api para verificar se amostras possuem resultado positivo ou negativo para drogas ilicitas.

Ambientes:

- Production - [https://toxicology-test.herokuapp.com/api/](https://toxicology-test.herokuapp.com/api/)
- Local - [http://localhost:3000/api/](http://localhost:3000/api/)


## Contents

- [Structure](#structure)
- [Usage](#usage)

## Structure

Projeto escrito utilizando [NodeJS](https://nodejs.org/en/), [Express](https://expressjs.com/) and [Typescript](https://www.typescriptlang.org/).

```
src
  |_ bin
  |_ common
  |_ config
  |_ database
  |     |_ migrations
  |     |_ model
  |     |_ seeds
  |_ repositories
  |_ routes
  |_ sample
  |_ view-model
  app.ts
.gitignore
jest.config
package-lock.json
package.json
README.md
tsconfig.json
```

## Usage

```bash

# run develop

npm run start:dev

# unit tests

npm run test

# build

npm run build

# run production

npm run start

# run develop migrations

npm run knex:migrate

# run production migrations

npm run knex:migrate:prod


```

**Docker**

Rodando projeto localmente com docker

```bash

# running through facilitator

sh ./clean-dev-environment.sh && run-dev-environment.sh

# running e2e tests with docker

docker-compose -f docker-compose.e2e.yml build
docker-compose -f docker-compose.e2e.yml up -d database-test
docker-compose -f docker-compose.e2e.yml run descoclass-api-test npm run test:e2e:docker


```
