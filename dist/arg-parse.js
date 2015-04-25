'use strict';

var Args, app;

app = angular.module('arg.parse.app', []);

app.service('argParser', [require('arg-parser')]);

app.factory('parseArgs', [
  'argParser', function(argParser) {
    return function() {
      argParser.parse();
    };
  }
]);

app.factory('addArg', [
  'argParser', function(argParser) {
    return function(opts) {
      argParser.add(opts);
    };
  }
]);

app.factory('parsedArgs', [
  'argParser', 'parseArgs', function(argParser, parseArgs) {
    parseArgs();
    return argParser.params;
  }
]);

app.service('args', [
  'parsedArgs', 'addArg', Args = (function() {

    function Args(parsedArgs, addArg) {
      this.parsedArgs = parsedArgs;
      this.addArg = addArg;
    }

    return Args;

  })()
]);
