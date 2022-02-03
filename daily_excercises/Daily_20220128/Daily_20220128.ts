import {test} from '../../util/testUtil';

function main(){
    test(0, longestNonRepeatingSubstring(""));
    test(1, longestNonRepeatingSubstring("a"));
    test(1, longestNonRepeatingSubstring("aaa"));
    test(2, longestNonRepeatingSubstring("aac"));
    test(3, longestNonRepeatingSubstring("abc"));
    test(3, longestNonRepeatingSubstring("abcc"));
    test(3, longestNonRepeatingSubstring("ccccacccc"));
    test(6, longestNonRepeatingSubstring("abcdefffabcd"));
    test(6, longestNonRepeatingSubstring("aabcdefffabcd"));
    test(10, longestNonRepeatingSubstring("abrkaabcdefghijjxxx"));
}

function longestNonRepeatingSubstring(val:string):number{
    let curr:number = 0;
    let contender:number = 0;
    let charArr:string[] = val.split('');
    charArr.forEach((v,i) => {
        if(i > 0){
            if(v == charArr[i-1])
                contender = 1;
            else
                contender++;
            if(contender > curr) curr = contender;
        } else {
            curr++;
            contender++;
        }
    });
    return curr;
}

main();