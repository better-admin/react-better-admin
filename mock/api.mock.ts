import {defineMock} from 'vite-plugin-mock-dev-server'

/**
 * 更多配置参考如下链接
 * @see https://github.com/pengzhanbo/vite-plugin-mock-dev-server/blob/main/README.zh-CN.md
 */
export default defineMock([
    {
        url: '/api/test',
        body: {
            a: 1,//用户名
            b: 2,
        }
    },
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
                "aaa",
                "/page2/page1"
            ]
        }
    }
])