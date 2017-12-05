'use strict';

// 
var express = require('express');
var config = require('./config');
var Router = require('./router');
var cluster = require('cluster');
var os = require('os');

var app = express();

Router.init(app, config);

// if (cluster.isMaster && config.env !== 'development') {
//     let workers = [];
//     for (var i = 0; i < os.cpus().length; i++) {
//         workers[i] = cluster.fork();
//         workers[i].on('exit', (code, signal) => {
//             if (signal) {
//                 console.error(`worker was killed by signal: ${signal}`);
//             } else if (code !== 0) {
//                 console.error(`worker exited with error code: ${code}`);
//             } else {
//                 console.error('worker exited');
//             }
//         });
//     }
// } else {
app.listen(config.port, function () {
    console.warn('Worker ' + process.pid + ' running a ' + config.env + ' server listening on port ' + config.port);
});
// }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwiY29uZmlnIiwiUm91dGVyIiwiY2x1c3RlciIsIm9zIiwiYXBwIiwiaW5pdCIsImxpc3RlbiIsInBvcnQiLCJjb25zb2xlIiwid2FybiIsInByb2Nlc3MiLCJwaWQiLCJlbnYiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQSxJQUFNQSxVQUFVQyxRQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTRCxRQUFRLFVBQVIsQ0FBZjtBQUNBLElBQU1FLFNBQVNGLFFBQVEsVUFBUixDQUFmO0FBQ0EsSUFBTUcsVUFBVUgsUUFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUksS0FBS0osUUFBUSxJQUFSLENBQVg7O0FBRUEsSUFBSUssTUFBTU4sU0FBVjs7QUFFQUcsT0FBT0ksSUFBUCxDQUFZRCxHQUFaLEVBQWlCSixNQUFqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSUksSUFBSUUsTUFBSixDQUFXTixPQUFPTyxJQUFsQixFQUF3QixZQUFNO0FBQzFCQyxZQUFRQyxJQUFSLGFBQXVCQyxRQUFRQyxHQUEvQixtQkFBZ0RYLE9BQU9ZLEdBQXZELGtDQUF1RlosT0FBT08sSUFBOUY7QUFDSCxDQUZEO0FBR0oiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcbmNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpO1xuY29uc3QgUm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXInKTtcbmNvbnN0IGNsdXN0ZXIgPSByZXF1aXJlKCdjbHVzdGVyJyk7XG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJyk7XG5cbmxldCBhcHAgPSBleHByZXNzKCk7XG5cblJvdXRlci5pbml0KGFwcCwgY29uZmlnKTtcblxuLy8gaWYgKGNsdXN0ZXIuaXNNYXN0ZXIgJiYgY29uZmlnLmVudiAhPT0gJ2RldmVsb3BtZW50Jykge1xuLy8gICAgIGxldCB3b3JrZXJzID0gW107XG4vLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcy5jcHVzKCkubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgd29ya2Vyc1tpXSA9IGNsdXN0ZXIuZm9yaygpO1xuLy8gICAgICAgICB3b3JrZXJzW2ldLm9uKCdleGl0JywgKGNvZGUsIHNpZ25hbCkgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHNpZ25hbCkge1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHdvcmtlciB3YXMga2lsbGVkIGJ5IHNpZ25hbDogJHtzaWduYWx9YCk7XG4vLyAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgIT09IDApIHtcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGB3b3JrZXIgZXhpdGVkIHdpdGggZXJyb3IgY29kZTogJHtjb2RlfWApO1xuLy8gICAgICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd3b3JrZXIgZXhpdGVkJyk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cbi8vIH0gZWxzZSB7XG4gICAgYXBwLmxpc3Rlbihjb25maWcucG9ydCwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oYFdvcmtlciAke3Byb2Nlc3MucGlkfSBydW5uaW5nIGEgJHtjb25maWcuZW52fSBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtjb25maWcucG9ydH1gKTtcbiAgICB9KTtcbi8vIH1cbiJdfQ==
