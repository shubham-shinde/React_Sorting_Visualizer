export default (list)=>{
const len = list.lenght();
let i=0,j=0,temp;
for(i=0;i<len;i++){
    for(j=0;j<len;j++){
        if(list[j]>list[j+1]){
            temp= list[j];
            list[j]= list[j+1];
            list[j+1]=temp;
        }
    }
}
return list;
}