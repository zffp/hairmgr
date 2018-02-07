/**
 * 获取用户收藏
 * @param {*} ctx 
 * @param {*} next 
 */
async function list(ctx, next) {
    ctx.body = '用户收藏'
}

/**
 * 保存用户收藏
 * @param {*} ctx 
 * @param {*} next 
 */
async function save(ctx, next) {
    //操作数据库
}

/**
 * 删除用户收藏
 * @param {*} ctx 
 * @param {*} next 
 */
async function del(ctx, next) {

}

module.exports = function buildRoute(route) {
    route.get("/collect/list", list)
    route.post("/collect/save", save)
    route.post("/collect/del", del);
}