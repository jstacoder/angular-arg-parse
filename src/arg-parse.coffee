'use strict'

app = angular.module 'arg.parse.app',[]

app.constant 'process',process

app.provider 'argv',[()->
    self = @

    self.argList = []

    self.defaultOptions =
        longOpt:false
        shortOpt:false
        required:false
        action:'store_true'
        target:false

    getArgs = ()->
        return self.argList

    addArg = (options)->
        opts = angular.extend {},self.defaultOptions,options
        self.argList.push opts
        return self

    rtn =
        $get : ['process',(process)->
            args = process.argv
            args.shift()
            args.shift()
            args.shift()
            return args
        ]
        addArg:addArg
        getArgs:getArgs
    return rtn
]

app.provider 'optParse',['argvProvider',(argvProvider)->
    self = @

    self.parsedArgs = {}

    parseArg = (arg)->
        parsed =
            arg:arg.longOpt
            target:arg.target
        self.parsedArgs.push parsed
        return
    getArgs = ()->
        return self.parsedArgs

    angular.forEach argvProvider.getArgs(),(itm)->
        parseArg itm
        return
    rtn =
        $get:[()->
            return getArgs()
        ]
        parseArg:parseArg
        getArgs:getArgs

    return rtn
]
