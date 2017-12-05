'use strict';

var packageJSON = require('../../../package.json');

module.exports.default = function (router) {
    router.get('/health', function (req, res) {
        var okMessage = {
            result: 'ok',
            version: packageJSON.version
        };
        res.json(okMessage);
    });
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9oZWFsdGhDaGVjay9oZWFsdGhDaGVjay5qcyJdLCJuYW1lcyI6WyJwYWNrYWdlSlNPTiIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdCIsInJvdXRlciIsImdldCIsInJlcSIsInJlcyIsIm9rTWVzc2FnZSIsInJlc3VsdCIsInZlcnNpb24iLCJqc29uIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLGNBQWNDLFFBQVEsdUJBQVIsQ0FBcEI7O0FBRUFDLE9BQU9DLE9BQVAsQ0FBZUMsT0FBZixHQUF5QixVQUFDQyxNQUFELEVBQVk7QUFDakNBLFdBQU9DLEdBQVAsQ0FBVyxTQUFYLEVBQXNCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2hDLFlBQU1DLFlBQVk7QUFDZEMsb0JBQVEsSUFETTtBQUVkQyxxQkFBU1gsWUFBWVc7QUFGUCxTQUFsQjtBQUlBSCxZQUFJSSxJQUFKLENBQVNILFNBQVQ7QUFDSCxLQU5EO0FBT0gsQ0FSRCIsImZpbGUiOiJyb3V0ZXMvaGVhbHRoQ2hlY2svaGVhbHRoQ2hlY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYWNrYWdlSlNPTiA9IHJlcXVpcmUoJy4uLy4uLy4uL3BhY2thZ2UuanNvbicpO1xuXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gKHJvdXRlcikgPT4ge1xuICAgIHJvdXRlci5nZXQoJy9oZWFsdGgnLCAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3Qgb2tNZXNzYWdlID0ge1xuICAgICAgICAgICAgcmVzdWx0OiAnb2snLFxuICAgICAgICAgICAgdmVyc2lvbjogcGFja2FnZUpTT04udmVyc2lvblxuICAgICAgICB9O1xuICAgICAgICByZXMuanNvbihva01lc3NhZ2UpO1xuICAgIH0pO1xufTsiXX0=
