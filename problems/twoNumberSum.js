/*
@author Utsav Kapoor
Problem 1
*/

// [2,3,5,1,7,6] Target 11
// Time Optimal Solution : O(n) Time | O(n) Space
function hasTwoNumberSum( arr, target ) {
  const diffMap = {};

  for( let idx in arr ) {
    let currNum = arr[idx];
    if(diffMap.hasOwnProperty(target - currNum)){
      return true;
    }
    diffMap[ currNum ] = idx;
  }

  return false;
}



/* ---------------------------------------------------------- */
//Space optimal Solution : Two pointer pattern 
// Time Complexity : O(NlogN) | Space Complexity O(N)

function twoNumberSumTP( arr, target ) {

  arr = arr.sort( ( a, b ) => a - b );

  let left = 0;
  let right = arr.length - 1;

  while( left <= right ) {
    let currSum = arr[ left ] + arr[ right ];
    
    if(  currSum === target ) {
    return true;
    }
    else if( currSum > target ) {
      right--;
    }
    else {
      left++
    }
  }

  return false;
  
}

// console.log( twoNumberSumTP( [ 2, 3, 5, 1, 7, 6 ], 11 ) )



