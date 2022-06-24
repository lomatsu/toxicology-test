# Toxicology (Back end)

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

# build

npm run build

# run develop

npm run start:dev

# unit tests

npm run tesgit
# run production

npm run start

# run develop migrations

npm run knex:migrate

# run production migrations

npm run knex:migrate:prod


```

**Docker**

Rodando o banco localmente com docker

```bash

docker-compose up -d

```
