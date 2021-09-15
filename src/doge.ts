import dogeAverage from '../lib/dogeAverage';
import * as dogeStats from '../lib/dogeStats'; 

export async function averageById(first?: number, last?: number): Promise<number|void> {
    try {
        return await dogeAverage(first, last);
    }
    catch (exc) {
        console.log(exc);
    }
}

export async function averageByDate(first?: string, last?: string): Promise<number|void> {
    try {
        return await dogeStats.average(first, last);
    }
    catch (exc) {
        console.log(exc);
    }
}

export async function highestByDate(first?: string, last?: string): Promise<number|void> {
    try {
        return await dogeStats.highest(first, last);
    }
    catch (exc) {
        console.log(exc);
    }
}
