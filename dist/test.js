module.exports = function() {
  var $i, app, argParser, args;
  require('./arg-parse.js');
  app = angular.module('arg.parse.test.app', ['arg.parse.app']);
  argParser = ng_load('argParser', ['arg.parse.app']);
  args = ng_load('args', ['arg.parse.app']);
  app.run([
    'argParser', 'args', function(argParser, args) {
      args.addArg({
        switchs: ['-t', '--tt'],
        value: 't',
        name: 't_text',
        desc: 'text to store',
        required: false
      });
      args.addArg({
        switchs: ['-o', '--oo'],
        name: 'o_text',
        desc: 'text to store',
        required: false
      });
      args.addArg({
        switchs: ['-g', '--gg'],
        value: 'g',
        name: 'g_text',
        desc: 'text to store',
        required: false
      });
      args.addArg({
        switchs: ['-f', '--ff'],
        value: 'f',
        name: 'f_text',
        desc: 'text to store',
        required: false
      });
      args.addArg({
        switchs: ['-r', '--rr'],
        value: 'r',
        name: 'r_text',
        desc: 'text to store',
        required: false
      });
      if (argParser.parse()) {
        console.log(args.parsedArgs);
      } else {
        console.log(argParser.help());
      }
    }
  ]);
  $i = angular.bootstrap(document, ['arg.parse.test.app']);
};
