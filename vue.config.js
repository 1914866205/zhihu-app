//模拟数据
const express = require('express')
const app=express();
//推荐数据
var recommendList = require('./src/data/recommend.json')
//api路径
var apiRoutes=express.Router();
app.use('/api',apiRoutes);
module.exports= {
    devServer: {
        host: "localhost",
        port: 9090,
        https: false,
        open: true,
        hotOnly: true,
        before(app) {
            app.get('/api/recommend', (req, res) => {
                res.json({
                    code: 1,
                    msg: '成功',
                    data: recommendList
                })
            })
        }
    }
}
