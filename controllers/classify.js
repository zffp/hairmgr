/**
 * 获取所有分类列表
 * @param {*} ctx 
 * @param {*} next 
 */
async function list(ctx, next) {
    ctx.body = '分类列表'
}

/**
 * 保存分类
 * @param {*} ctx 
 * @param {*} next 
 */
async function save(ctx, next) {
    //操作数据库
}

/**
 * 删除分类
 * @param {*} ctx 
 * @param {*} next 
 */
async function del(ctx, next) {

}

module.exports = function buildRoute(route) {
    route.get("/classify/list", list)
    route.post("/classify/save", save)
    route.post("/classify/del", del);
}