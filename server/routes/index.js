const router = require("koa-router")();

let accessToken = "init_s_token";
let role = "";
let menus = [];

// 5s刷新一次token
setInterval(() => {
    accessToken = 's_tk' + Math.random();
}, 500000)

// 登录接口获取token
router.get("/login", async (ctx) => {
    const { name } = ctx.query;
    switch (name) {
        case "admin":
            role = "admin";
            menus = ["home", "about", "manage"];
            break;
        default:
            role = "visitor";
            menus = ["home", "about"];
            break;
    }
    ctx.body = {
        accessToken,
        role,
        menus
    };
});

router.get("/getData", async (ctx) => {
    let { authorization } = ctx.headers;
    if (authorization !== accessToken) {
        ctx.body = {
            returncode: 104,
            info: "token过期，重新登录",
        };
    } else {
        ctx.body = {
            code: 200,
            returncode: 0,
            data: { id: Math.random() },
        };
    }
});

module.exports = router;