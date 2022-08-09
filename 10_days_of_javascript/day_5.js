/** Inheritance */
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
Rectangle.prototype.area = function() {
    return this.w * this.h
}
class Square extends Rectangle{
    constructor(w, h){
        super(w, w)
    }
}

/** Template Literals */
function sides(literals, ...expressions) {
    var area = expressions[literals.findIndex(value => value.search('area') > 0)]
    var per = expressions[literals.findIndex(value => value.search('perimeter') > 0)]
    
    var plus = (per + (Math.sqrt((per * per) - 16 * area))) / 4
    var minus = (per - (Math.sqrt((per * per) - 16 * area))) / 4
        
    return [plus, minus].sort((a, b) =>{
        if (a < b) return -1
        if (a > b) return 1
        return 0
    })
}

/** Arrow Functions */
function modifyArray(nums) {
    return nums.map((num) => {
        if (num % 2 > 0) return num * 3
        return num * 2
    })
}
