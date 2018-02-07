/**
 * 获取所有用户列表
 * @param {*} ctx 
 * @param {*} next 
 */
async function list(ctx, next) {
    ctx.body = '用户列表'
}

/**
 * 保存用户
 * @param {*} ctx 
 * @param {*} next 
 */
async function save(ctx, next) {
    //操作数据库
}

/**
 * 删除用户
 * @param {*} ctx 
 * @param {*} next 
 */
async function del(ctx, next) {

}

module.exports = function buildRoute(route) {
    route.get("/users/list", list)
    route.post("/users/save", save)
    route.post("/users/del", del);
}