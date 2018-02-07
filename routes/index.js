const router = require('koa-router')({
    prefix: '/weserver'
})

const classify = require('../controllers/classify')

/**
 * 分类列表
 */
classify(router)

module.exports = router