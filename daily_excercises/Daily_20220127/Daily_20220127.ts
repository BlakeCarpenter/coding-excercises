import {test} from '../../util/testUtil';

class ListNode{
    val:number
    next:ListNode

    constructor(val:number){
        this.val = val;
    }

    add(node:ListNode){
        if(this.next==null) this.next = node;
        else this.next.add(node);
    }

    addNum(val:number){
        this.add(new ListNode(val));
    }

    produceNumString():string{
        if(this.next == null) return "" + this.val;
        return this.val + this.next.produceNumString();
    }
}

function main(){
    console.log("Produce string")
    let prodStrList:ListNode = new ListNode(1);
    prodStrList.addNum(2);
    prodStrList.addNum(3);
    test("123", prodStrList.produceNumString());
    
    console.log("Reversal single element list")
    let singleElementList = new ListNode(1);
    test(1, getNumberFromListNode(singleElementList));

    console.log("Reversal 2 element list")
    let twoElementList = new ListNode(1);
    twoElementList.addNum(2);
    test(21, getNumberFromListNode(twoElementList));

    console.log("Reversal large list")
    let numFromNodeList = new ListNode(4);
    numFromNodeList.addNum(5);
    numFromNodeList.addNum(6);
    numFromNodeList.addNum(1);
    numFromNodeList.addNum(3);
    numFromNodeList.addNum(9);
    test(931654, getNumberFromListNode(numFromNodeList));

    console.log("writeNumberToListNode")
    let writeTestList = new ListNode(1);
    writeTestList.addNum(2);
    writeTestList.addNum(3);
    test(123, getNumberFromListNode(writeNumberToListNode(123)));
    
    console.log("addTwoNumbers")
    let l1 = new ListNode(2);
    l1.addNum(4);
    l1.addNum(3);

    let l2 = new ListNode(5)
    l2.addNum(6);
    l2.addNum(4);

    test("708", addTwoNumbers(l1, l2).produceNumString());
}

function addTwoNumbers(x:ListNode, y:ListNode):ListNode{
    let xNum:number = getNumberFromListNode(x);
    let yNum:number = getNumberFromListNode(y);
    return writeNumberToListNode(xNum + yNum);
}

function getNumberFromListNode(node:ListNode):number{
    if(node == null) return 0;
    if(node.next==null) return node.val;
    return node.val + getNumberFromListNode(node.next) * 10;
}

function writeNumberToListNode(val:number):ListNode{
    let root:ListNode;
    for(let tracker:number = val; tracker > 0; tracker = Math.floor(tracker/10)){
        let active = tracker%10;
        if(!root) root = new ListNode(active);
        else root.addNum(active);
    }
    return root;
}

main();