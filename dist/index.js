'use strict';

// 
var express = require('express');
var config = require('./config');
var Router = require('./router');
var cluster = require('cluster');
var os = require('os');

var app = express();

Router.init(app, config);

if (cluster.isMaster && config.env !== 'development') {
    var workers = [];
    for (var i = 0; i < os.cpus().length; i++) {
        workers[i] = cluster.fork();
        workers[i].on('exit', function (code, signal) {
            if (signal) {
                console.error('worker was killed by signal: ' + signal);
            } else if (code !== 0) {
                console.error('worker exited with error code: ' + code);
            } else {
                console.error('worker exited');
            }
        });
    }
} else {
    app.listen(config.port, function () {
        console.warn('Worker ' + process.pid + ' running a ' + config.env + ' server listening on port ' + config.port);
    });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwiY29uZmlnIiwiUm91dGVyIiwiY2x1c3RlciIsIm9zIiwiYXBwIiwiaW5pdCIsImlzTWFzdGVyIiwiZW52Iiwid29ya2VycyIsImkiLCJjcHVzIiwibGVuZ3RoIiwiZm9yayIsIm9uIiwiY29kZSIsInNpZ25hbCIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbiIsInBvcnQiLCJ3YXJuIiwicHJvY2VzcyIsInBpZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLFNBQVNELFFBQVEsVUFBUixDQUFmO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUSxVQUFSLENBQWY7QUFDQSxJQUFNRyxVQUFVSCxRQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNSSxLQUFLSixRQUFRLElBQVIsQ0FBWDs7QUFFQSxJQUFJSyxNQUFNTixTQUFWOztBQUVBRyxPQUFPSSxJQUFQLENBQVlELEdBQVosRUFBaUJKLE1BQWpCOztBQUVBLElBQUlFLFFBQVFJLFFBQVIsSUFBb0JOLE9BQU9PLEdBQVAsS0FBZSxhQUF2QyxFQUFzRDtBQUNsRCxRQUFJQyxVQUFVLEVBQWQ7QUFDQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSU4sR0FBR08sSUFBSCxHQUFVQyxNQUE5QixFQUFzQ0YsR0FBdEMsRUFBMkM7QUFDdkNELGdCQUFRQyxDQUFSLElBQWFQLFFBQVFVLElBQVIsRUFBYjtBQUNBSixnQkFBUUMsQ0FBUixFQUFXSSxFQUFYLENBQWMsTUFBZCxFQUFzQixVQUFDQyxJQUFELEVBQU9DLE1BQVAsRUFBa0I7QUFDcEMsZ0JBQUlBLE1BQUosRUFBWTtBQUNSQyx3QkFBUUMsS0FBUixtQ0FBOENGLE1BQTlDO0FBQ0gsYUFGRCxNQUVPLElBQUlELFNBQVMsQ0FBYixFQUFnQjtBQUNuQkUsd0JBQVFDLEtBQVIscUNBQWdESCxJQUFoRDtBQUNILGFBRk0sTUFFQTtBQUNIRSx3QkFBUUMsS0FBUixDQUFjLGVBQWQ7QUFDSDtBQUNKLFNBUkQ7QUFTSDtBQUNKLENBZEQsTUFjTztBQUNIYixRQUFJYyxNQUFKLENBQVdsQixPQUFPbUIsSUFBbEIsRUFBd0IsWUFBTTtBQUMxQkgsZ0JBQVFJLElBQVIsYUFBdUJDLFFBQVFDLEdBQS9CLG1CQUFnRHRCLE9BQU9PLEdBQXZELGtDQUF1RlAsT0FBT21CLElBQTlGO0FBQ0gsS0FGRDtBQUdIIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKTtcbmNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVyJyk7XG5jb25zdCBjbHVzdGVyID0gcmVxdWlyZSgnY2x1c3RlcicpO1xuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuXG5sZXQgYXBwID0gZXhwcmVzcygpO1xuXG5Sb3V0ZXIuaW5pdChhcHAsIGNvbmZpZyk7XG5cbmlmIChjbHVzdGVyLmlzTWFzdGVyICYmIGNvbmZpZy5lbnYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBsZXQgd29ya2VycyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3MuY3B1cygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdvcmtlcnNbaV0gPSBjbHVzdGVyLmZvcmsoKTtcbiAgICAgICAgd29ya2Vyc1tpXS5vbignZXhpdCcsIChjb2RlLCBzaWduYWwpID0+IHtcbiAgICAgICAgICAgIGlmIChzaWduYWwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGB3b3JrZXIgd2FzIGtpbGxlZCBieSBzaWduYWw6ICR7c2lnbmFsfWApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgd29ya2VyIGV4aXRlZCB3aXRoIGVycm9yIGNvZGU6ICR7Y29kZX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignd29ya2VyIGV4aXRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IGVsc2Uge1xuICAgIGFwcC5saXN0ZW4oY29uZmlnLnBvcnQsICgpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKGBXb3JrZXIgJHtwcm9jZXNzLnBpZH0gcnVubmluZyBhICR7Y29uZmlnLmVudn0gc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7Y29uZmlnLnBvcnR9YCk7XG4gICAgfSk7XG59XG4iXX0=
