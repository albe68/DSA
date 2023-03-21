class Node{
    constructor(val){
        this.value=val;
        this.right=this.left=null;
        
    }
    
}
class BST{
    constructor(){
        this.root=null;
    }
    insert(val){
        if(this.root===null){
            if(this.root>val){
                this.left=val
            }
            else if(this.root<val){
                this.right=val;

            }

        }
        
    }
    search(val){
       if(val===this.root){
            
       }
    }
}

const BST=new BST();
BST.isnert(5);
BST.insert(6);
BST.insert(7);
BST.insert(9);
BST.insert(8);
BST.search(5)
console.log(BST)
