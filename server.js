const Hapi = require('hapi');
const routes = require('./routes');
const server = new Hapi.Server();

server.connection({ port: 4000 });

// const routes = (server, options, next) => {
//   server.route({
//     method: 'GET',
//     path: '/info',
//     handler: (request, reply) => {
//       reply('info page');
//     }
//   });
//   server.route({
//     method: 'GET',
//     path: '/',
//     handler: (request, reply) => {
//       reply('hello world! 123');
//     },
//   });
//   next();
// };

const registrations = [
    {
      plugin: require('./routes'),
    },
    {
      plugin: require('good'),
      options: {
        reporter: require('good-console'),
        events: { response: '*' },
      }
    },
  ];
// const plugins = [{
//   register: require('./routes'),
//   options: {},
//   },{
//   register: require('good'),
//   options: {
//     reporter: require('good-console'),
//     events: { response: '*' },
//   },
// }];

server.register({registrations: registrations}, (err) => {
  if (err) {
    throw err;
  }
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('server has strated at ', server.info.uri);
  });
});
