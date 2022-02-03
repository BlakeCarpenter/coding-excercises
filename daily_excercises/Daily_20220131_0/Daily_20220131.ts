import {test} from "../../util/testUtil";

function main(){
    test("abcba", findLongestPalindrome("abcba"));
    test("ee", findLongestPalindrome("geeks"));
    // test("anana", findLongestPalindrome("banana"));
    // test("illi", findLongestPalindrome("million"));
    // test("racecar", findLongestPalindrome("tracecars"));
}

function findLongestPalindrome(str:string):string{
    let grid:boolean[][] = makePalindromeGrid(str);
    return null;
}

function makePalindromeGrid(str:string):boolean[][]{
    let grid:boolean[][] = str.split("").map(
        (v:string) => str.split("").map((w:string) => (v==w))
    );
    
    console.log(grid);

    return grid;
}

// function findLongestPalindrome(str:string):string{
//     let result:string = "";
//     let chars:string[] = str.split("");
//     chars.forEach((char, pivot) => {
//         let pivotResult:string = char;
//         let leftBound:number = pivot - 1;
//         let rigthBound:number = pivot + 1;
//         for(let i:number = 0; i > 0; i++){

//         }
//     });
//     return result;
// }

main();