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