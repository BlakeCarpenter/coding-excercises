export function test(expected, recieved):boolean{
    if(expected == recieved){
        console.log("Assertation passes");
        return true;
    } else {
        console.log(`Expected ${expected}, got ${recieved}`);
        return false;
    }
}