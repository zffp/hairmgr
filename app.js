const Koa = require('koa')

const router=require("./routes")


const app = new Koa()

app.use(router.routes())

app.listen(3000);
console.log("启动成功，请访问：http://localhost:3000")