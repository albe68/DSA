class Node{
    constructor(val){
        this.data=val;
        this.next=null;

    }
}

class LinkedList{
    constructor(val){
        this.head={
            value:val,
            next:null
        }
    }
    insert(val){
        var node=new Node(val);
        this.tail.next=node;
        this.tail=node;
}
}

var LL=new LinkedList(5)
LL.insert(7)
log(LL)

const holdingPointer=this.top;
this.top=newNode;
this.top.next=holdingPointer;
