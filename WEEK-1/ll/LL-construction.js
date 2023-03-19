// SINGLE LINKED LIST
class Node{
    constructor(val){
        this.value=val;
        this.next=null
    }

}
class LinkedList{
    constructor(val){
        this.head={
            value:val,
            next:null
        }
    }
}
// var newLL=new LinkedList(5);
// console.log(newLL);

//DOUBLE LINKED LIST
class DoublyLinkedList{
    constructor(val){
        this.head={
            prev:null,
            value:val,
            next:null
            
         }
    }
}
var dbLL=new DoublyLinkedList(1);
console.log(dbLL);