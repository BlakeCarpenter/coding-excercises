import {test} from '../util/testUtil';

function main():void{
    let numsArr:number[] = [4,7,1,-3,2];

    test(false, twoSum(numsArr, 100));
    test(false, twoSum(numsArr, -50));
    test(true, twoSum(numsArr, -1));
    test(true, twoSum(numsArr, 11));
    test(true, twoSum(numsArr, 5));
    test(true, twoSum(numsArr, 6));
}

function twoSum(arr:number[], target:number):boolean{
    let valSet:Set<number> = new Set<number>();

    for(let i:number = 0; i < arr.length; i++){
        if(valSet.has(target - arr[i])) return true;
        valSet.add(arr[i]);
    }
    return false;
}

main();