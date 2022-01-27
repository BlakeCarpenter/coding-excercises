export function test(expected, recieved):boolean{
    if(expected == recieved){
        console.log("\x1b[32m", "Assertation passes", "\x1b[37m");
        return true;
    } else {
        console.log("\x1b[31m", `Expected ${expected}, got ${recieved}`, "\x1b[37m");
        return false;
    }
}