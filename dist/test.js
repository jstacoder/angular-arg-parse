module.exports = function() {
  var $i, app, argv, optParse;
  require('./arg-parse.js');
  app = angular.module('arg.parse.app');
  app.config([
    'argvProvider', function(argvProvider) {
      argvProvider.addArg({
        longOpt: '--mylong',
        shortOpt: '-m'
      });
      argvProvider.addArg({
        longOpt:"newarg",
        required:true
      })
      console.log(argvProvider.getArgs());
      console.log(argvProvider.getArgs().length);
    }
  ]);
  optParse = ng_load('optParse', ['arg.parse.app']);
  $i = angular.bootstrap(document, ['arg.parse.app']);
  argv = ng_load('argv', ['arg.parse.app']);
  console.log(optParse);
};
