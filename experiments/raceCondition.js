//Experimenting how is it possible to get double booking in database - backed web applications and how to prevent double booking and race conditions with row - level locks.

function first(uid) {
  console.log( "Entered function" );
  console.log( "Req UID", uid );
  //SELECT ROW 
  //CHECK : IF BOOKED : ERROR 
  //UPDATE ROW
  setTimeout( () => { console.log( "From Inside Set Timeout",uid ); }, 5000 );
}

//Request one 
first(1); // Some Async Logic

// Picks up request two from listener queue
first(2);