const mysql = require('mysql');

// 设置数据库连接参数
const createSql = () => {
    const connection = mysql.createConnection({
        host: 'localhost', // 数据库服务器地址
        user: 'root', // 数据库用户名
        password: 'wangji817', // 数据库密码
        database: 'jianshu' // 要连接的数据库名
    });
    // 开始连接
    connection.connect((error) => {
        if (error) throw error;
    });
    return connection;
}


// 当你完成数据库操作后，可以关闭连接
// connection.end();

//查询sql
const querySql = async (pageNo, pageSize) => {
    const connection = createSql();
    const sqlUrl = `select js_json from chapters where id between ${(pageNo - 1) * pageSize + 1} and ${pageNo * pageSize} order by id desc`;
    return new Promise((resolve, reject) => {
        connection.query(sqlUrl, (error, results) => {
            if (error) {
                reject(error)
            } else {
                // 处理查询结果
                resolve(results);
                connection.end();
            }
        });
    })
}

//新增sql
const insertSql = async (data) => {
    const connection = createSql();
    const sqlUrl = "INSERT INTO chapters SET ?";
    return new Promise((resolve, reject) => {
        connection.query(sqlUrl, data, (error, results) => {
            if (error) {
                reject(error)
            } else {
                // 处理查询结果
                resolve(results);
                connection.end();
            }
        });
    })
}

module.exports = { querySql, insertSql };