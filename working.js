// server.js
const cors = require('fastify-cors')
const fastify = require('fastify')()


async function start() {
  await fastify.register(cors, { 
    origin: 'localhost',
    allowedHeaders: ['Origin', 'Accept', 'Content-Type'],
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE']
  }).then(() => console.log('cors registered'))
  await fastify.register(require('./routes/v1/users'), { prefix: '/v1' })
  await fastify.register(require('./routes/v2/users'), { prefix: '/v2' })
  
  fastify.ready(() => console.log(fastify.printRoutes()))
  
  await fastify.listen(3000)
}

start()
