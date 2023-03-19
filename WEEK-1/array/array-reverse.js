function rvereseArray(arr,start,end)
{
	while (start < end)
	{
		var temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
}


function printArray(arr,size)
{
for (var i = 0; i < size; i++){
console.log(arr[i]);
}
}


	var arr= [1, 2, 3, 4, 5, 6];
	var n = 6;

	printArray(arr, n);
	
	
	rvereseArray(arr, 0, n-1);
	
	console.log("Reversed array is");
	
	
	printArray(arr, n);
