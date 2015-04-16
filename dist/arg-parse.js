'use strict';

var app;

app = angular.module('arg.parse.app', []);

app.constant('process', process);

app.provider('argv', [
  function() {
    var addArg, getArgs, rtn, self;
    self = this;
    self.argList = [];
    self.defaultOptions = {
      longOpt: false,
      shortOpt: false,
      required: false,
      action: 'store_true',
      target: false
    };
    getArgs = function() {
      return self.argList;
    };
    addArg = function(options) {
      var opts;
      opts = angular.extend({}, self.defaultOptions, options);
      self.argList.push(opts);
      return self;
    };
    rtn = {
      $get: [
        'process', function(process) {
          var args;
          args = process.argv;
          args.shift();
          args.shift();
          args.shift();
          return args;
        }
      ],
      addArg: addArg,
      getArgs: getArgs
    };
    return rtn;
  }
]);

app.provider('optParse', [
  'argvProvider', function(argvProvider) {
    var getArgs, parseArg, rtn, self;
    self = this;
    self.parsedArgs = {};
    parseArg = function(arg) {
      var parsed;
      parsed = {
        arg: arg.longOpt,
        target: arg.target
      };
      self.parsedArgs.push(parsed);
    };
    getArgs = function() {
      return self.parsedArgs;
    };
    angular.forEach(argvProvider.getArgs(), function(itm) {
      parseArg(itm);
    });
    rtn = {
      $get: [
        function() {
          return getArgs();
        }
      ],
      parseArg: parseArg,
      getArgs: getArgs
    };
    return rtn;
  }
]);
