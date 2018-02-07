/**
 * 列出精品文章
 * @param {*} ctx 
 * @param {*} next 
 */
async function list(ctx, next) {
    ctx.body = '精品文章'
}

/**
 * 保存精品文章
 * @param {*} ctx 
 * @param {*} next 
 */
async function save(ctx, next) {
    //操作数据库
}

/**
 * 删除精品文章
 * @param {*} ctx 
 * @param {*} next 
 */
async function del(ctx, next) {

}

module.exports = function buildRoute(route) {
    route.get("/article/list", list)
    route.post("/article/save", save)
    route.post("/article/del", del);
}