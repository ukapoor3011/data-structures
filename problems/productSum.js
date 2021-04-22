function productSum( arr, multiplier ) {
  let sum = 0;
  for( let elem of arr ) {
    if( Array.isArray( arr ) ) {
      sum += productSum( arr, sum, multiplier + 1 );
    } else {
      sum += elem;
    }
  }
  return sum * multiplier;
}
