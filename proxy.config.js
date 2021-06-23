const proxy =[
    {
    context: ['/api'],
    target:'https://bq-acka-burger.herokuapp.com/api',
    changeOrigin: true,
    pathRewrite: {'/api' : ''},
    secure:false,
    logLevel:'debug',
    }
]

module.exports = proxy;