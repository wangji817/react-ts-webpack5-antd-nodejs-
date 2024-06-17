const fs = require('fs');

// 监听程序退出事件
process.on('beforeExit', (code) => {
    console.log(`About to exit with code: ${code} `);
    // 执行退出前的清理工作
});

// 监听程序退出
process.on('exit', () => {
    console.log('程序退出');
});

// 监听Ctrl+C信号
let pageNo = Number(fs.readFileSync(__dirname + "/pageNo.txt"));

setInterval(() => {
    pageNo++;
    console.log(`pageNo:${pageNo}`);
}, 1000)
process.on('SIGINT', () => {
    console.log('捕获到Ctrl+C，准备退出程序');
    // 在这里可以执行任何清理工作，例如关闭数据库连接、文件流等
    // 完成清理工作后，可以调用 `process.exit()` 强制退出程序
    fs.writeFileSync('./pageNo.txt', `321`, 'utf8');
    process.exit();
});

const express = require('express');
const app = express();
const port = 8454;

// 启动服务
app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
});