// routes/v2/users.js
module.exports = function (fastify, opts, done) {
  fastify.get('/user', (req, rep) => rep.send('v2'))
  done()
}
