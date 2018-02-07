/**
 * 获取个人发布的发型秀
 * @param {*} ctx 
 * @param {*} next 
 */
async function listuser(ctx, next) {
    ctx.body = '获取个人发型秀'
}

/**
 * 发型秀广场
 * @param {*} ctx 
 * @param {*} next 
 */
async function alllist(ctx,next){

}

/**
 * 保存用户发型秀
 * @param {*} ctx 
 * @param {*} next 
 */
async function save(ctx, next) {
    //操作数据库
}

/**
 * 删除用户发型秀
 * @param {*} ctx 
 * @param {*} next 
 */
async function del(ctx, next) {

}

module.exports = function buildRoute(route) {
    route.get("/hairshow/list", list)
    route.get("/hairshow/alllist", alllist)
    route.post("/hairshow/save", save)
    route.post("/hairshow/del", del);
}