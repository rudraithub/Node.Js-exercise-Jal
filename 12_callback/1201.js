function add(num1, num2, callback){
    const result =  num1 + num2;
    callback(result);
}

function displayResult(result){
    console.log("The result is "  + result);

}

add (1,2, displayResult);