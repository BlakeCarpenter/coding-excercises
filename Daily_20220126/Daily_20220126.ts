import {test} from "../util/testUtil";

class TreeNode{
    val: number;
    left: TreeNode;
    right: TreeNode;
    
    constructor(val: number){
        this.val = val;
    }
}

class CountHelper{
    isUnival: boolean
    count: number

    constructor(isUnival: boolean, count: number){
        this.isUnival = isUnival;
        this.count = count;
    }
}

function main(){
    let a: TreeNode = new TreeNode(0);
    a.left = new TreeNode(1);
    a.right = new TreeNode(0);
    a.right.left = new TreeNode(1);
    a.right.right = new TreeNode(0);
    a.right.left.left = new TreeNode(1);
    a.right.left.right = new TreeNode(1);
    let aResult: number = countUnivalSubtrees(a);
    test(5, aResult);

    let b: TreeNode = new TreeNode(1);
    let bResult: number = countUnivalSubtrees(b);
    test(1, bResult);

    let c: TreeNode = new TreeNode(1);
    c.left = new TreeNode(1);
    c.right = new TreeNode(1);
    let cResult: number = countUnivalSubtrees(c);
    test(3, cResult);

    let d: TreeNode = new TreeNode(1);
    d.left = new TreeNode(1);
    d.right = new TreeNode(1);
    d.left.left = new TreeNode(1);
    d.left.right = new TreeNode(1);
    d.right.left = new TreeNode(1);
    d.right.right = new TreeNode(1);

    let e:TreeNode = null;
    let eResult:number = countUnivalSubtrees(e);
    test(0, eResult);
}

function countUnivalSubtrees(node:TreeNode):number{
    return countUnivalSubtreesHelper(node).count;
}

function countUnivalSubtreesHelper(node: TreeNode): CountHelper{
    if(node == null) return new CountHelper(true, 0);
    let leftCH:CountHelper = countUnivalSubtreesHelper(node.left);
    let rightCH:CountHelper = countUnivalSubtreesHelper(node.right);
    let returnCH:CountHelper = new CountHelper(leftCH.isUnival && rightCH.isUnival, leftCH.count + rightCH.count);
    if(
        (!node.left || node.val == node.left.val) &&
        (!node.right || node.val == node.right.val) &&
        returnCH.isUnival
    ){
        returnCH.count++;
    } else {
        returnCH.isUnival = false
    }

    return returnCH;
}

main();