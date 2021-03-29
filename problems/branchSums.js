/**
 * @author Utsav Kapoor
 * Problem 4 : Branch Sums
 */

function branchSums(root){
  let result = [];
  findBranchSums( root, 0, result);
  return result;
}

function findBranchSums( currNode, currSum, result ){

  currSum = currSum + currNode.value;
  
  if( currNode.left === null && currNode.right === null ){
    result.push(currSum);
    return;
  }

  if( currNode.left) {
    findBranchSums( currNode.left, currSum, result);
  }

  if( currNode.right) {
    findBranchSums( currNode.right. currSum, result);
  }
}