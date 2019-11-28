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