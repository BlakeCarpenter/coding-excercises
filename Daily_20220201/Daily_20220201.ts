import {test} from "../util/testUtil";
import ListNode from "../structs/ListNode";

function main(){
    let list = createTestList();
    let normal:string = list.produceNumString();
    console.log("Test linked list produces regular string");
    test("43210", normal);

    let list3 = createTestList();
    let iterativeReversedList:ListNode = iterativeReverse(list3);
    test("01234", iterativeReversedList.produceNumString());
}

function iterativeReverse(list:ListNode):ListNode{
    let last:ListNode = null;
    for(let pointer:ListNode = list; pointer!=null; pointer = pointer.next){
        if(!last){
            last = new ListNode(pointer.val);
        }else{
            let newNode:ListNode = new ListNode(pointer.val);
            newNode.next = last;
            last = newNode;
        }
    }
    return last;
}

function createTestList():ListNode{
    let list:ListNode = new ListNode(4);
    list.addNum(3);
    list.addNum(2);
    list.addNum(1);
    list.addNum(0);
    return list;
}

main();