/**
 * @author Utsav Kapoor 
 * LinkedList Implementation 
 * TODO: Remove method
 */

class Node {
  constructor ( value ) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {

  constructor ( value ) {
    this.head = new Node( value );
    this.tail = this.head;
    this.length = 1;
  }


  append( value ) {
    const newNode = new Node( value );

    this.tail.next = newNode;
    this.tail = newNode

    this.length += 1;
    return this;
  }


  prepend( value ) {
    const newNode = new Node( value );

    this.newNode.next = this.head;
    this.head = newNode

    this.length += 1;
    return this;
  }


  printList() {

    const list = [];
    let current = this.head;

    while( current !== null ) {
      list.push( current.value );
      current = current.next;
    }

    return list;

  }


  traverseToIndex( index ) {
    let current = this.head;
    let count = 0;

    while( count !== index && current !== null ) {
      current = current.next;
      count++;
    }

    return current;
  }

  insert( index, value ) {

    if( index >= this.length ) {
      this.append( value );
    }

    const newNode = new Node( value );
    const mainNode = this.traverseToIndex( index - 1 );
    const nextNode = mainNode.next;

    mainNode.next = newNode;
    newNode.next = nextNode;
    this.length++;

    return this;
  }

}


module.exports = {
  LinkedList
};

// let myLinkedList = new LinkedList( 10 );
// myLinkedList.append( 5 );
// myLinkedList.append( 16 ); myLinkedList.prepend( 1 );
// myLinkedList.insert( 2, 99 );
// myLinkedList.insert( 20, 88 );



