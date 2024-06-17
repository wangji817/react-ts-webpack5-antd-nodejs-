const express = require('express');
const mysql = require('./mysql.js');
const { querySql, insertSql } = mysql;
const app = express();
const port = 8686;

app.get('/getList', async (req, res) => {
    // 使用res.render方法渲染视图，并传递数据
    const pageno = req?.query?.pageNo || 1;
    const pagesize = req?.query?.pageSize || 2;
    let _data = await querySql(pageno, pagesize);
    let new_data = [];
    _data.map((item, index) => {
        try {
            const js_json = JSON.parse(item.js_json);
            item && new_data.push(js_json);
        } catch (error) {
            console.log(error, `当前是第${index}个数据报错`);
        }
    })
    // console.log(new_data);
    res.send(new_data);
});

// 启动服务
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // open(`http://localhost:${port}`);
});