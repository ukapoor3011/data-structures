/**
 * @author Utsav Kapoor
 * Closest Value in BST
 * Problem 2
 */

function findClosestValue( root, target ) {
  let current = root;
  let closest = root;

  while( current !== null ) {

    let currDiff = Math.abs(target - current.value);

    if( currDiff === 0 ) {
      return closest;
    }

    let diffWithClosest = Math.abs(target - closest);
    closest = currDiff < diffWithClosest ? current : closest;

    if( target < current.value ){
      current = current.left
    }
    else {
      current = current.right
    }
  }
}