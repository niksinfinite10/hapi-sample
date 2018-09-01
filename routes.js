const routes = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/info',
    handler: (request, reply) => {
      reply('info page');
    }
  });
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('sample world! 123');
    },
  });
  next();
};



module.exports = routes;
