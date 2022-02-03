import {test} from "../../util/testUtil";

function main():void{
    let ex1:number[] = [];
    test(ex1, countingSort(ex1));

    let ex2:number[] = [1];
    test(ex2, countingSort(ex2));

    let ex3:number[] = [1,2,3];
    test(ex3, countingSort(ex3));

    let ex4:number[] = [2,1,3,1,2,3,1,2];
    let ex4Result:number[] = countingSort(ex4);
    test([1,1,1,2,2,2,3,3], ex4Result);

    let givenExample:number[] = [3,3,2,1,3,2,1];
    let givenResult:number[] = countingSort(givenExample);
    test([1,1,2,2,3,3,3], givenResult);
}

function countingSort(arr:number[]):number[]{
    let output:number[] = [];
    let count:number[] = [];

    for(let i:number = 0; i < arr.length; i++){
        let num:number = arr[i];
        // 1 to prevent NaN
        if(!count[num]) count[num] = 1;
        else count[num]++;
    }

    for(let i:number = 1; i <= count.length-1; i++){
        // Buffer to prevent NaN from empty indexes
        let lastBuffer:number = count[i-1] ? count[i-1] : 0;
        let currBuffer:number = count[i] ? count[i] : 0;
        count[i] = lastBuffer + currBuffer;
    }

    for(let i:number = arr.length-1; i >= 0; i--){
        let j:number = arr[i];
        count[j] -= 1;
        output[count[j]] = arr[i];
    }
    
    return output;
}

main();