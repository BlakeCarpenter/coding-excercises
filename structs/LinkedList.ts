class LinkedList<T>{
    head:LinkedListNode<T>;
    tail:LinkedListNode<T>;

    add(node:LinkedListNode<T>){
        if(!this.head){
            this.head = node;
            this.tail = this.head;
        }else{
            this.tail.next = node;
            this.tail = this.tail.next;
        }
    }

    addVal(val:T){
        this.add(new LinkedListNode<T>(val));
    }

    forEach(f: (v:T, i:number) => void){
        if(this.head) f(this.head.val, 0);
        if(this.head.next) this._forEachRecurse(this.head.next, 1, f);
    }

    private _forEachRecurse(node:LinkedListNode<T>, index:number, f:Function){
        f(node.val, index);
        if(!node.next) return;
        this._forEachRecurse(node.next, index+1, f);
    }
}

class LinkedListNode<T>{
    val:T;
    next:LinkedListNode<T>;

    constructor(val:T){
        this.val = val;
    }  
}

export default LinkedList;