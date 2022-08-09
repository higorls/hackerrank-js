/** Create a Rectangle Object */
function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b,
    }
}

/** Count Objects */
function getCount(objects) {
    return objects.filter(obj => obj.x === obj.y).length
}

/** Classes */
class Polygon {
    sidesLength
    
    constructor(sidesLength){
        this.sidesLength = sidesLength
    }
    perimeter(){
        return this.sidesLength.reduce((prev, curr) => prev + curr)
    }
}
