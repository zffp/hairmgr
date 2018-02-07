/**
 * 根据类别获取图库内容
 * @param {*} ctx 
 * @param {*} next 
 */
async function byclassify(ctx, next) {
    ctx.body = '分类获取'
}

/**
 * 热门图库
 * @param {*} ctx 
 * @param {*} next 
 */
async function hot(ctx, next) {

}
/**
 * 保存修改图库
 * @param {*} ctx 
 * @param {*} next 
 */
async function save(ctx, next) {
    //操作数据库
}

/**
 * 删除图库
 * @param {*} ctx 
 * @param {*} next 
 */
async function del(ctx, next) {

}

module.exports = function buildRoute(route) {
    route.get("/gallery/byclassify", list)
    route.get("/gallery/hot", hot)
    route.post("/gallery/save", save)
    route.post("/gallery/del", del);
}