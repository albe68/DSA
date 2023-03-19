//bubble Sort
function sort(arr){
    do{
        swapped=false
        for(i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i];
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }
        }}while(swapped)
    }
    
    const arr=[100,2,4,-1,0,3]
    sort(arr)
    console.log(arr)
    