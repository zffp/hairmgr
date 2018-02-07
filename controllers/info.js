
/**
 * 获取所有信息列表
 * @param {*} ctx 
 * @param {*} next 
 */
async function list(ctx, next) {
    ctx.body = '信息列表'
}

/**
 * 根据类别获取信息
 * @param {*} ctx 
 * @param {*} netx 
 */
async function byclassify(ctx,netx){

}

/**
 * 保存信息
 * @param {*} ctx 
 * @param {*} next 
 */
async function save(ctx, next) {
    //操作数据库
}

/**
 * 删除信息
 * @param {*} ctx 
 * @param {*} next 
 */
async function del(ctx, next) {

}

module.exports = function buildRoute(route) {
    route.get("/info/list", list)
    route.get("/info/byclassify", byclassify);
    route.post("/info/save", save)
    route.post("/info/del", del)   
}