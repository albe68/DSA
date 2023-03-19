class Stack{
    constructor(){
        this.items=[]
        this.length=0
    }
    push(val){
        this.items.push(val);
        this.length++;
        console.log(this.items)
        console.log("length",this.length)
        
    }
    pop(){
        this.items.pop()
        console.log(this.items)
    }
    peek(){
        
       var hi=this.items[this.items.length-1]
        console.log(hi)
    }
    isEmpty()
{
    // return true if stack is empty
    return this.items.length == 0;
}
}

var st=new Stack;
st.push(5)
st.push(4)
st.push(6)
st.push(9)
st.push(8)
st.pop()
st.peek()

console.log(st.isEmpty())