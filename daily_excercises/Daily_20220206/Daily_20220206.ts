import {test} from "../../util/testUtil";

class BinaryTreeNode<T>{
    left:BinaryTreeNode<T>;
    right:BinaryTreeNode<T>;
    value:T;

    constructor(value:T){
        this.value = value;
    }
}

function main():void{
    let root:BinaryTreeNode<number> = new BinaryTreeNode<number>(8);
    root.left = new BinaryTreeNode<number>(4);
    root.right = new BinaryTreeNode<number>(12);

    root.left.left = new BinaryTreeNode<number>(2);
    root.left.right = new BinaryTreeNode<number>(6);

    root.right.left = new BinaryTreeNode<number>(10);
    root.right.right = new BinaryTreeNode<number>(14);

    test([8,8], findCeilingFloor(root, 8));
    test([4,6], findCeilingFloor(root, 5));
    test([6,6], findCeilingFloor(root, 6));
    test([null, 2], findCeilingFloor(root, 1));
}

function findCeilingFloor(root:BinaryTreeNode<number>, k:number, floor:number=null, ceiling:number=null):number[]{
    if(!root) return [floor, ceiling];
    if(root.value == k) return [root.value, root.value];

    if(k < root.value) return findCeilingFloor(root.left, k, floor, root.value);
    if(k > root.value) return findCeilingFloor(root.right, k, root.value, ceiling);
}

main();