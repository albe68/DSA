let a=[1,2,3,4,5,6]  //LINEAR SEARCH
let target=3
function search(a,target){
    for(i=0;i<a.length;i++){
        if(a[i]==target){
            console.log(a[i])
        }
        
    }
    console.log("value not found")
    
    }
search(a,target)