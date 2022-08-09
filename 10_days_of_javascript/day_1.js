/** Arithmetic Operators */
function getArea(length, width) {
    let area;
    area = length * width
    return area;
}
function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * ( length + width )
    return perimeter;
}

/** Functions */
function factorial(n){
    var nFactorial = 0
    while(n-1 > 0){
        nFactorial = nFactorial === 0 ? n : nFactorial * n
        n--
    }
    return nFactorial
}

/** Let and Const */
function main() {
    const PI = Math.PI
    let r = readLine()
    console.log(PI * r * r)
    console.log(2 * PI * r)
    try {    
        PI = 0;
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}