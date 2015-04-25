'use strict'

app = angular.module 'arg.parse.app',[]

app.service 'argParser',[require('arg-parser')]

app.factory 'parseArgs',['argParser',(argParser)->
    return ()->
        argParser.parse()
        return
]

app.factory 'addArg',['argParser',(argParser)->
    return (opts)->
        argParser.add opts
        return
]

app.factory 'parsedArgs',['argParser','parseArgs',(argParser,parseArgs)->
    parseArgs()
    return argParser.params
]

###
#   @args.addArg
#          call with option object like below
#          opts =
#               switchs:[]
#               name : ''
#               desc : ''
#               required:true
#               default:false
#           args.add opts
#
#       now args.parsedArgs has our args
###
app.service 'args',['parsedArgs','addArg',class Args
    constructor : (@parsedArgs,@addArg)->
]
