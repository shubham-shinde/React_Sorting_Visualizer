export default (list)=>{
const len = list.lenght();
let i=0,j=0,temp;
for(i=0;i<len;i++){
    for(j=0;j<len-1;j++){
        if(list[j]>list[j+1]){
            temp= list[j];
            list[j]= list[j+1];
            list[j+1]=temp;
        }
    }
}
return list;
}


//Selection Sort
let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];let selectionSort = (arr) => {
                let len = arr.length;
                for (let i = 0; i < len; i++) {
                    let min = i;
                    for (let j = i + 1; j < len; j++) {
                        if (arr[min] > arr[j]) {
                            min = j;
                        }
                    }
                    if (min !== i) {
                        let tmp = arr[i];
                        arr[i] = arr[min];
                        arr[min] = tmp;
                    }
                }
                return arr;
            }
            arr[min] = tmp;
        }
    }
    return arr;
}

//Quick Sort
const quickSort = (
    unsortedArray,
    comparator = defaultComparator
  ) => {
  
    // Create a sortable array to return.
    const sortedArray = [...unsortedArray];
  
    // Recursively sort sub-arrays.
    const recursiveSort = (start, end) => {
  
      // If this sub-array is empty, it's sorted.
      if (end - start < 1) {
        return;
      }
      const pivotValue = sortedArray[end];
      let splitIndex = start;
    };
  
    // Sort the entire array.
    recursiveSort(0, unsortedArray.length - 1);
    return sortedArray;
  };




// Merge Sort Implentation (Recursion)
function mergeSort (unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);
  
    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
  
    // Using recursion to combine the left and right
    return merge(
      mergeSort(left), mergeSort(right)
    );
  }



  //Inserion Sort

  const checkLoopInvariant = (newArr, originalArr, index) => {
    //need to slice at least 1 element out
    if (index < 1) index = 1
  
    newArr = newArr.slice(0,index)
    originalArr = originalArr.slice(0, index)
  
    for (let i=0; i < newArr.length; i++) {
  
      //check that the original array contains the value
      if (!originalArr.includes(newArr[i])) {
        console.error(`Failed! Original array does not include ${newArr[i]}`)
      }
  
      //check that the new array is in sorted order
      if (i < newArr.length - 1 && newArr[i] > newArr[i+1]) {
        console.error(`Failed! ${newArr[i]} is not less than ${newArr[i+1]}`)
      }
    }
  }