import {test} from "../../util/testUtil";

function main(){
    test(3, witnesses([3,6,3,4,1]));
    test(2, witnesses([7,1,2,3,4,5]));
    test(1, witnesses([1,2,3,4,5,6,7]));
    test(0, witnesses([]));
}

function witnesses(heights:number[]):number{
    if(!heights.length) return 0;
    let max:number = 0;
    let viewers:number = 0;
    for(let i:number = heights.length; i >= 0; i--){
        if(heights[i] > max){
            max = heights[i];
            viewers++;
        }
    }
    return viewers;
}

main()