// routes/v1/users.js
module.exports = function (fastify, opts, done) {
  fastify.get('/user', (req, rep) => rep.send('v1'))
  done()
}
