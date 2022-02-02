import {test} from "../util/testUtil";

function main(){
    test("ee", findLongestPalindrome("geeks"));
    // test("anana", findLongestPalindrome("banana"));
    // test("illi", findLongestPalindrome("million"));
    // test("racecar", findLongestPalindrome("tracecars"));
}

function findLongestPalindrome(str:string):string{
    let strArr:string[] = str.split("");
    let compTable:boolean[][] = strArr.map(v => strArr.map(w => false));

    strArr.forEach((v, i) => {
        compTable[i][i] = true;
    });

    compTable.forEach((v, i) => v.forEach((w, j) => {
        if(strArr[i] == str[j]) compTable[i][j] = true;
    }));

    console.log(compTable);
    return null;
}

main();