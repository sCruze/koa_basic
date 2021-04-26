const router = require('koa-router')()

router.prefix('/api')

router.post('/calldata', async (ctx) => {
    try {
        console.log('res', ctx.request.body)
        ctx.response.body = ctx.request.body
        ctx.status = 200
        console.log('ctx req', ctx.request)
        console.log('ctx res', ctx.response)
    } catch (err) {
        console.err(err)
    }
})

module.exports = router.routes()