import {test} from "../../util/testUtil";

function main():void{
    test(1, staircase(1));
    test(2, staircase(2));
    test(3, staircase(3));
    test(5, staircase(4));
    test(8, staircase(5));
    test(12, staircase(6));
}

function staircase(length:number):number{
    // Lots of graphing to find a relation
    // A staircase can have 0 to capacity (floor(length/2)) 2 step increments (2SI)
    //   for length of staircase
    // Permutations for 0 2SI is always 1
    // Permutations for 1 2SI is length - 1
    // Permutations for capacity 2SI is 1 if length is even, 1 + capacity if odd
    // To make zero on even, 1 on odd, (len - 2cap)

    // 2SIs for cap is cap * (len - 2 cap) + 1 or 2cap^2 + cap*len + 1
    // By substituting the number of 2SI we're checking into cap, can get the permutations
    //   for that number of 2SIs, so the formula can be written as
    //     2x^2 + xy + 1 = z
    //   where x is the number of 2SIs, y is the length, and z is the result
    // To find total permutations, use formula for capacity factorial
    
    let capacity:number = Math.floor(length/2);
    let total:number = 0;
    for(let i:number = capacity; i >= 0; i--){
        total += -2*(i**2) + (i * length) + 1;
    }

    return total;
}

main();