const fsPromise = require('fs/promises');
const path = require('path');
const parse = require('csv-parse/lib/sync');

async function average(initDate, lastDate = new Date().toISOString().substr(0,10)) {
    const filePath = path.join(__dirname,'Dogecoin.csv');

    const content = await fsPromise.readFile(filePath);
    let records = parse(content, { columns: true });
    const filteredRecords = records.filter(record => record.Date >= initDate && record.Date <= lastDate);
    const sum = filteredRecords.reduce((accum, record, idx) => accum += +record.Price, 0)
    console.log(filteredRecords);
    return sum/filteredRecords.length;
}

async function highest(initDate, lastDate) {
    const filePath = path.join(__dirname,'Dogecoin.csv');

    const content = await fsPromise.readFile(filePath);
    let records = parse(content, { columns: true });
    const filteredRecords = records.filter(record => record.Date >= initDate && record.Date <= lastDate);
    return filteredRecords.reduce((max, record, idx) => max = Math.max(+record.High,max), 0);
}

module.exports = { average, highest };