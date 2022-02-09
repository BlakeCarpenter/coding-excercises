import {test} from '../../util/testUtil';

function main():void{
    const testA:number[] = [13,4,7];
    const testB:number[] = [13,4,1];
    const testC:number[] = [1,2,5,4];
    const testD:number[] = [1];
    const testE:number[] = [2,1];
    const testF:number[] = [4,3,2,1];

    test(true, checkCanIncrease(testA));
    test(false, checkCanIncrease(testB));
    test(true, checkCanIncrease(testC));
    test(true, checkCanIncrease(testD));
    test(true, checkCanIncrease(testE));
    test(false, checkCanIncrease(testF));
}

function checkCanIncrease(arr:number[]):boolean{
    if(arr.length==0) return false;
    if(arr.length<=2) return true;
    let devianceCount:number = 0;
    for(let i:number = 0; i < arr.length-1; i++){
        if(arr[i] > arr[i+1]) devianceCount++;
        if(devianceCount > 1) return false;
    }
    return true;
}

main();