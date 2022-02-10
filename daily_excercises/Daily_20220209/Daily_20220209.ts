import {test} from "../../util/testUtil";

function main():void{
    test(1, staircase(1));
    test(2, staircase(2));
    test(3, staircase(3));
    test(5, staircase(4));
    test(8, staircase(5));
    test(12, staircase(6));
}

function staircase(num:number):number{
    let maxTwos = Math.floor(num/2);
    return 0;
}

main();