module.exports = ()->
    require './arg-parse.js'

    app = angular.module 'arg.parse.app'

    app.config(['argvProvider',(argvProvider)->
        argvProvider.addArg({longOpt:'--mylong',shortOpt:'-m'})
        console.log argvProvider.getArgs()
        console.log argvProvider.getArgs().length
    ])

    optParse = ng_load 'optParse',['arg.parse.app']
    
    $i = angular.bootstrap document, ['arg.parse.app']
    argv = ng_load 'argv',['arg.parse.app']

    

    console.log argv
    console.log optParse
