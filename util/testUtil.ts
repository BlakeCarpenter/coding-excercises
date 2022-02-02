export function test(expected, recieved):boolean{
    if(Array.isArray(expected)){
        if(!Array.isArray(recieved)) return fail(`Expected array, got ${recieved}`);
        return testArray(expected as [], recieved as []) ?
            pass("Assertation passes") :
            fail(`Arrays are not equal, expected\n[${expected}]\ngot\n[${recieved}]`);
    }
    if(expected == recieved){
        return pass("Assertation passes");
    } else {
        return fail(`Expected ${expected}, got ${recieved}`);
    }
}

function testArray(expected:[], recieved:[]):boolean{
    if(expected.length != recieved.length) return false;
    for(let i:number = 0; i < expected.length; i++){
        if(expected[i] != recieved[i]) return false;
    }
    return true;
}

function pass(msg:string):boolean{
    console.log("\x1b[32m", msg, "\x1b[37m");
    return true;
}

function fail(msg:string):boolean{
    console.log("\x1b[31m", msg, "\x1b[37m");
    return false;
}