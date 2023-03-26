import {defineMock} from 'vite-plugin-mock-dev-server'

/**
 * 更多配置参考如下链接
 * @see https://github.com/pengzhanbo/vite-plugin-mock-dev-server/blob/main/README.zh-CN.md
 */
export default defineMock([
    {
        url: '/api/login',
        delay: 2000,
        body: (request) => {
            if (!request.body || request.body.account !== "admin") {
                return {
                    errorCode:1,
                    message: "没有该账户"
                }
            }
            if (request.body.password === "123456") {
                return {
                    errorCode:0,
                    message: "登录成功",
                    jwt:'test jwt....'
                }
            } else {
                return {
                    errorCode:2,
                    message: "密码错误"
                }
            }
        }
    },

    {
        url: '/api/account/permissions',
        delay: 1000,
        body: {
            permissions: [
                "/index",
                "------------",
                "/user/list",
                "/user/dept",
                "/user/position",
                "/user/role",
                "/user/permission",
                "/user/menu",
                "------------",
                "/system/params",
                "/system/dict",
                "/system/log/action",
                "/system/log/login",
                "/system/monitor/users",
                "/system/monitor/server",
                "/system/monitor/redis",
                "/system/monitor/caches",
                "/system/dev/success",
                "/system/dev/fail",
                "/system/dev/403",
                "/system/dev/404",
                "------------",
                "/test",
            ]
        }
    },


    {
        url: '/api/account/status',
        delay: 1000,
        body: {
            errorCode: 0,
            list:[
                {value:1,text:'正常'},
                {value:2,text:'未激活'},
                {value:3,text:'已冻结'},
            ]
        }
    },
])