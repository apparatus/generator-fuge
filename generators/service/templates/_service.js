'use strict';

var seneca = require('seneca')();

<% if (transport === 'redis') { %>
seneca.use('redis-queue-transport')
<% } %>

seneca.use('env-plugins');

seneca.add({role: '<%= name %>', cmd: 'action1'}, function(args, callback) {
  callback(null, {data: 'data'});
});

seneca.add({role: '<%= name %>', cmd: 'action2'}, function(args, callback) {
  callback(null, {data: 'data'});
});

<% if (transport === 'redis') { %>
seneca.listen({type: 'redis-queue'})
<% } else { %>
seneca.listen({host: process.env.SERVICE_HOST, port: process.env.SERVICE_PORT});
<% } %>

module.exports.seneca = seneca;
