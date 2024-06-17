const axios = require('axios');
const mysql = require('./mysql.js');
const fs = require('fs');
const { querySql, insertSql } = mysql;

const instance = axios.create({
    baseURL: 'https://www.jianshu.com/',
    timeout: 5000,
});

const axiosAjax = async (ajaxData) => {
    const ajax = {
        method: "get",
        ...ajaxData,
    }
    return new Promise(async (resolve, reject) => {
        instance(ajax).then(response => resolve(response?.data)).catch(err => resolve({ code: 400 }));
    })
}

let pageNo = Number(fs.readFileSync(__dirname + "/pageNo.txt"));//568305-上一次的数值
const pageSize = 20;
const getJianShu = async () => {
    fs.writeFileSync('./pageNo.txt', `${pageNo}`, 'utf8');
    if (pageNo >= 1000000000) {
        console.log(`数据已爬完`)
        return;
    }
    const url = `https://www.jianshu.com/programmers?page=${pageNo}&type_id=31&count=${pageSize}`;
    const data = await axiosAjax({ url });
    // 执行查询
    const _data = await insertSql({ create_date: new Date(), js_json: JSON.stringify(data) });
    console.log(`当前pageNo：${pageNo}`);
    setTimeout(() => {
        pageNo++;
        getJianShu();
    }, 10)
}
getJianShu();