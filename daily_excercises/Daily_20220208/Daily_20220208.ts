import {test} from "../../util/testUtil";

class MaxStack{
    stackSize:number;

    fullStack:StackNode
    maxStack:StackNode

    constructor(){
        this.stackSize = 0;
    }

    push(num:number):void{
        let pushed:StackNode = new StackNode(num);
        pushed.next = this.fullStack;
        this.fullStack = pushed;
        if(!this.maxStack || num >= this.maxStack.value){
            let maxPushed:StackNode = new StackNode(num);
            maxPushed.next = this.maxStack;
            this.maxStack = maxPushed;
        }
        this.stackSize++;
    }

    pop():number{
        if(this.stackSize == 0) return null;
        if(this.maxStack.value == this.fullStack.value){
            this.maxStack = this.maxStack.next;
        }
        let ret:number = this.fullStack.value;
        this.fullStack = this.fullStack.next;
        this.stackSize--;
        return ret;
    }

    max():number{
        if(!this.maxStack) return null;
        return this.maxStack.value;
    }

    size():number{
        return this.stackSize;
    }
}

class StackNode{
    value:number;
    next:StackNode

    constructor(value:number){
        this.value = value;
    }
}

function main():void{
    let stack:MaxStack = new MaxStack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(2);
    test(4, stack.size());
    test(3, stack.max());
    test(2, stack.pop());
    test(3, stack.pop());
    test(2, stack.max());
    test(2, stack.pop());
    test(1, stack.pop());
    test(null, stack.max());
    test(null, stack.pop());
}

main();