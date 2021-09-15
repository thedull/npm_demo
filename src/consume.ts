import * as doge from './doge';

const firstId = process.argv[2] || 1;
const lastId = process.argv[3] || 1;

if (Number.isNaN(+firstId) || Number.isNaN(+lastId)) {
    (async () =>  {
        const firstDate = new Date(process.argv[2]).toISOString().substr(0,10) || '1970-01-01';
        const lastDate = new Date(process.argv[3]).toISOString().substr(0,10) || new Date().toISOString().substr(0,10);

        const avgDate = await doge.averageByDate(firstDate, lastDate);
        const maxDate = await doge.highestByDate(firstDate, lastDate)
        console.log(`Average between ${firstDate} and ${lastDate}: ${avgDate}`);
        console.log(`Highest between ${firstDate} and ${lastDate}: ${maxDate}`);
    })();
}
else {
    (async () =>  {
        const avgId = await doge.averageById(+firstId, +lastId);
        console.log(`Average between IDs ${firstId}-${lastId}: ${avgId}`);
    })();    
}

