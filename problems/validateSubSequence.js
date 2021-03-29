/**
 * @author Utsav Kapoor
 * Problem 3 : Validate Subsequence
 */

function validateSubSeq( arr, seq ) {

  let arrIdx = 0;
  let seqIdx = 0;

  while( arrIdx < arr.length && seqIdx < seq.length ){
    if( arr[arrIdx] === seq[seqIdx]){
      seqIdx+=1;
    }
    arrIdx+=1
  }

  return seqIdx === seq.length;

}