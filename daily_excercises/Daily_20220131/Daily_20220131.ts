import {test} from '../../util/testUtil';

function main(){
    let testArr:number[] = [1,2,3,4,5];
    let testArr2:number[] = [1,2,2,2,3];

    console.log("Test binarySearch");
    test(0, binarySearch(testArr, 0, testArr.length-1, 1, null));
    console.log("Test search highest index");
    test(4, binarySearch(testArr2, 0, testArr2.length-1, 2, "high"));
    console.log("Test search lowest index");
    test(4, binarySearch(testArr2, 0, testArr2.length-1, 2, "low"));

    console.log("Works as normal binary search");
    test([1,1], findRange(testArr, 2));

    console.log("Provided examples")
    test([6,8], findRange([1,3,3,5,7,8,9,9,9,15], 9));
    test([1,2], findRange([100, 150, 150, 153], 150));
    test([-1, -1], findRange([1,2,3,4,5,6,10], 9));
}
function findRange(arr:number[], target:number):number[]{
    return null;
}

function binarySearchHigh(arr:number[], target:number):number{
    return null;
}

function binarySearchLow(arr:number[], target:number):number{
    return null;
}

function binarySearch(arr:number[], low:number, high:number, target:number, lowOrHigh:string):number{
    console.log(low, arr[low], high, arr[high]);
    let ret:number = -1;
    const pivot:number = Math.floor(low+(high-1)/2);
    console.log(pivot);
    if(arr[pivot] == target) ret = pivot;
    if(ret == -1){
        if(target < arr[pivot]) return binarySearch(arr, low, pivot-1, target, lowOrHigh);
        if(target > arr[pivot]) return binarySearch(arr, pivot+1, high, target, lowOrHigh);
    }else{
        if(lowOrHigh == null) return ret;
        let temp:number = -1;
        if(lowOrHigh == "low") temp = binarySearch(arr, low, pivot-1, target, lowOrHigh);
        if(lowOrHigh == "high") temp = binarySearch(arr, pivot+1, high, target, lowOrHigh);
        if(temp!=-1) return temp;
        return ret;
    }
}

main();