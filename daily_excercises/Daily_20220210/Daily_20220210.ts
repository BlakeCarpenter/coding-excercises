import {test} from "../../util/testUtil";

function main():void{
    test(false, containsPythagTriple([]));
    test(false, containsPythagTriple([1,2,2]));
    test(true, containsPythagTriple([3,4,5]));
    test(true, containsPythagTriple([5,12,13]));
    test(true, containsPythagTriple([8,15,17]));
    test(true, containsPythagTriple([7,24,25]));
    test(true, containsPythagTriple([20,21,29]));
    test(true, containsPythagTriple([12,35,37]));
    test(true, containsPythagTriple([3,5,12,5,13]));
}

function containsPythagTriple(arr:number[]):boolean{
    if(arr.length < 3) return false;
    // Pre-calc squares
    let squares:Set<number> = new Set<number>();
    arr.forEach(v => squares.add(v*v));
    // Spread for iteration
    let squareArr:number[] = [...squares];
    for(let i:number = 0; i < squareArr.length; i++){
        for(let j:number = 0; j < squareArr.length; j++){
            // Not same index, if squares has a^2 + b^2
            if(i!=j && squares.has(squareArr[i] + squareArr[j])) return true;
        }
    }
    return false;
}

main();