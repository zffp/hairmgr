/**
 * 获取所有图片
 * @param {*} ctx 
 * @param {*} next 
 */
async function list(ctx, next) {
    ctx.body = '所有图片'
}
/**
 * 显示图片
 * @param {*} ctx 
 * @param {*} next 
 */
async function show(ctx, next) {

}
/**
 * 保存图片
 * @param {*} ctx 
 * @param {*} next 
 */
async function save(ctx, next) {
    //操作数据库
}

/**
 * 删除图片
 * @param {*} ctx 
 * @param {*} next 
 */
async function del(ctx, next) {

}

module.exports = function buildRoute(route) {
    route.get("/images/list", list)
    route.get("/images/show", show)
    route.post("/images/save", save)
    route.post("/images/del", del);
}