import {test} from './testUtil';

function __test__(){
    console.log("Determine Highest Power 10 100")
    test(2, determineHighestPowerTen(100));
    console.log("Determine Highest Power 10 not direct power 10")
    test(1, determineHighestPowerTen(15));
    test(3, determineHighestPowerTen(2456));
    test(5, determineHighestPowerTen(153417));
}

export function determineHighestPowerTen(val:number):number{    
    return Math.floor(Math.log(val) / Math.log(10));
}

__test__();