export default class ListNode{
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