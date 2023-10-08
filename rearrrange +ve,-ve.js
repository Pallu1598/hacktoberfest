<script>

// JavaScript program for
// moving negative numbers to left
// while maintaining the order


class Solution{
	
	rotateSubArray(arr, l, r){
		let temp = arr[r]
		for(let j = r;j > l-1;j--){
			arr[j] = arr[j-1]
		}
		arr[l] = temp

		return arr
	}

	
	moveNegative(arr){

		let last_negative_index = -1

		for(let i=0;i<arr.length;i++){
			if(arr[i] < 0){
				last_negative_index += 1
				let temp = arr[i];
				arr[i] = arr[last_negative_index];
				arr[last_negative_index] = temp;

				// Done to manage order too
				if(i - last_negative_index >= 2)
					this.rotateSubArray(arr, last_negative_index+1, i)
			}
		}

		return arr
	}
}


// Driver Code

let arr = [5, 5, -3, 4, -8, 0, -7, 3, -9, -3, 9, -2, 1]
let ob = new Solution()
ob.moveNegative(arr)
for(let i of arr){
	document.write(i,' ')
}

// This code is contributed by shinjanpatra

</script>

