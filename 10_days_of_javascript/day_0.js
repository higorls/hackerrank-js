/** Hello World */
function greeting(parameterVariable) {
    console.log('Hello, World!');
    console.log(parameterVariable);
}

/** Data Types */
function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    const firstDecimal = 4.0;
    const firstString = 'HackerRank ';
    
    console.log(firstInteger + parseInt(secondInteger))
    console.log(firstDecimal + parseFloat(secondDecimal))
    console.log(`${firstString}${secondString}`)
}