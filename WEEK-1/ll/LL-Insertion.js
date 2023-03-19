class Node{     //-USED WHILE CREATING A NODE
    constructor(val){
        this.value=val;
        this.next=null
    }
}
class LinkedList{
    constructor(val){
        this.head={  //<----------HEAD
            value:val,
            next:null
        }
        this.tail=this.head; //head==tail while single node in 1st case;
        this.length=1;
        }
 
    // add-in-Last
        append(val){ 
            // console.log(val)   
            const newNode={
                value:val,
                next:null
            }        
      
        this.tail.next=newNode;
        this.tail=newNode;
        this.length++;
        return this;
    }
    //add-in-Front
    prepend(val){
     var newNode=new Node(val)
     newNode.next=this.head
        this.head=newNode
        
        this.length++;
        return this;

    }
    insert(index,val){
        console.log(index,val)
        if(index>=this.length){
            console.error("INDEX SHOULD NOT MORE THAN AVAIALBLE SPACE but i will ADD");
            return this.append(val)
        }
        var newNode=new Node(val)
        const leader=this.traverse(index-1);
        
        const pointer=leader.next;
        leader.next=newNode;
        newNode.next=pointer;
        this.length;
        return this.printList()
       
    }
    traverse(index){
        let counter=0;
        let currentNode=this.head;
        console.log("times",index)
        while (counter!==index){
            
            currentNode=currentNode.next;
            console.log("times")
            counter++;
            
        }
          return currentNode;  
    }
    printList(){
        const array=[];
        let currentNode=this.head;
        while(currentNode!==null){
            array.push(currentNode.value);
            currentNode=currentNode.next;
        }

        console.log( array);
    }
}
const myLinkedList=new LinkedList(10);

myLinkedList.prepend(5)
myLinkedList.append(7)
myLinkedList.insert(2,0)
myLinkedList.printList();
// console.log(myLinkedList);

 