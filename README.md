A3 - Sistemas distribuídos e mobile

Sistema de Gestão de Campeões de F1 (API RESTful)

Este projeto é uma API RESTful para gerenciar campeões de Fórmula 1, permitindo a criação, leitura, atualização e exclusão (CRUD) de informações sobre campeões e seus títulos. A aplicação é construída com Node.js, usando o Express.js para a criação da API e MySQL como banco de dados.

Funcionalidades
GET /campeoes: Lista todos os campeões registrados.
GET /campeoes/{id}: Exibe informações detalhadas de um campeão específico, buscando pelo ID.
POST /campeoes: Cria um novo campeão, com nome e número de títulos.
PUT /campeoes/{id}: Atualiza as informações de um campeão existente, baseado no ID.
DELETE /campeoes/{id}: Exclui um campeão da base de dados.

Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript do lado do servidor.
Express.js: Framework web para Node.js, utilizado para criar a API.
MySQL: Sistema de gerenciamento de banco de dados relacional.
JWT (JSON Web Token): Autenticação para proteger rotas sensíveis da API.

Crie um banco de dados MySQL chamado campeoes_f1 e execute as migrações necessárias.

Para iniciar o servidor de desenvolvimento, utilize:

npm run dev

O servidor estará disponível em http://localhost:3000.

