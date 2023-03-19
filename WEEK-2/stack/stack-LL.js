class Stack{
    arr=[];
    top;
    size;
    constructor(n){
        this.top=-1;
        this.size=n;
        this.arr=new Array(this.size);
    }
}
function reverse(str){
    let n=str.length;
    let obj=new Stack(n);

    let i;
    for(i = 0; i < n; i++)
        obj.push(str[i]);
  
    // Pop all characters of string
    // and put them back to str
    for(i = 0; i < n; i++)
    {
        let ch = obj.pop();
        str[i] = ch;
    }

}
var s="albert".split("")

reverse(s)
console.log(s)