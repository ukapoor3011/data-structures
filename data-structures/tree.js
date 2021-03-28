/**
 * @author Utsav Kapoor
 * Binary Tree Class
 */


class Node {
  constructor( value ) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {

  constructor( value ) {
    this.root = new Node(value);
  }

  /*-----------------------------------------*/

  insert( value ){
    
    let newNode = new Node( value );
    let currNode = this.root;

    while( true ) {

      if( currNode.value <= value ) {
        if(!currNode.left){
          currNode.left = newNode;
          return this;
        }
        currNode = curr.left;
      }
      else {
        if(!currNode.right){
          currNode.right = newNode;
          return this;
        }
        currNode = currNode.right;
      }
    }
  }

  /*-----------------------------------------*/

  find( value ) {
    let currNode = this.root;
    while(currNode !== null ){
      if( currNode.value === value ) {
        return currNode;
      }
      else if ( value < currNode.value ){
        currNode = currNode.left;
      }
      else {
        currNode = currNode.right;
      }
    }
    return null;
  }

  /*-----------------------------------------*/

  bfsTraversal() {
    let result = [];
    let queue = [this.root];

    while( queue.length ){
      currNode = queue.shift();
      result.push(currNode);

      if(currNode.left){
        queue.push(currNode.left)
      }
      if(currNode.right){
        queue.push(currNode.right)
      }
    }
    return result;
  }

  /*-----------------------------------------*/

  dfsTraversal( currNode , result ) {
    result.push(currNode.value);
    if(currNode.left){
      this.dfsTraversal(currNode.left, result);
    }
    if(currNode.right){
      this.dfsTraversal(currNode.right, result);
    }
    return result;
  }

}

module.exports= {
  BST
}