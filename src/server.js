import http from 'node:http';

// Métodos HTTP: GET, POST, PUT, PATCH, DELETE
// GET: Buscar uma informação (Lista, item)
// POST: Criando uma informação
// PUT: Editando uma informação
// PATCH: Editando uma informação específica
// DELETE: Deletando uma informação específica

// Tipos de parâmetros: http://localhost:3333/users?search=Diego&page=2
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

const users = []

// Aqui é onde o servidor é criado.
const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (method === 'GET' && url === '/users') {
    return res
      .writeHead(200, { 'Content-Type': 'application/json' })
      .end(JSON.stringify(users));
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Fulano',
      email: 'fulano@gmail.com'
    });
    return res.end('Users created');
  }

  return res.end('Hello Node.js!');
});

server.listen(3333);