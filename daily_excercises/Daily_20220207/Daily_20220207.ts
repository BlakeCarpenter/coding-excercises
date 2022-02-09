import {test} from "../../util/testUtil";

class BinaryTreeNode<T>{
    left:BinaryTreeNode<T>;
    right:BinaryTreeNode<T>;
    value:T;

    constructor(value:T){
        this.value = value;
    }

    preorder(str:string=""):string{
        str += this.value;
        if(this.left) str = this.left.preorder(str);
        if(this.right) str = this.right.preorder(str);
        return str;
    }
}

function main():void{
    let root = new BinaryTreeNode<string>("a");
    root.left = new BinaryTreeNode<string>("b");
    root.right = new BinaryTreeNode<string>("c");
    root.left.left = new BinaryTreeNode<string>("d");
    root.left.right = new BinaryTreeNode<string>("e");
    root.right.left = new BinaryTreeNode<string>("f");

    test("acfbed", invert(root).preorder());
}

function invert<T>(root:BinaryTreeNode<T>):BinaryTreeNode<T>{
    if(!root) return null;
    let temp:BinaryTreeNode<T> = root.left;
    root.left = invert(root.right);
    root.right = invert(temp);
    return root;
}

main();