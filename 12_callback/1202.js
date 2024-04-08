function iterateArr(array , callback) {
    for (let i = 0; i< array.length; i++) {
        callback(array[i]);
    }
}
const newArray = [1,2,3,4.5]

iterateArr(newArray, function(item, index){
    console.log("item at index " , index , ":" , item);
});