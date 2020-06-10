// 配置代理中间件，以进行连接、表达、浏览器同步等。
const { createProxyMiddleware } = require("http-proxy-middleware");
// 配置代理服务
const apiProxy = createProxyMiddleware("/api1", {
	target: "http://localhost/check.php",
	secure: false,
	changeOrigin: true,
	pathRewrite: {
		"^/api1": "/api1"
	}
});
// const apiProxy2 = createProxyMiddleware("/api2", {
// 	target: "http://localhost:3002",
// 	secure: false,
// 	changeOrigin: true,
// 	pathRewrite: {
// 		"^/api2": "/api2"
// 	}
// });
module.exports = function(app) {
	app.use(apiProxy);
	// app.use(apiProxy2);
}
