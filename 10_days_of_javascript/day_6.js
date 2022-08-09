/** Bitwise Operators */
function getMaxLessThanK(n, k){
    var S = Array.from({length: n}, (value, index) => index+1)
    var max = 0
    S.forEach((num, index) => {
        var sToCompare = S.filter((val, i) => i > index)
        var maxFromCompare = compare(num, k, sToCompare)
        if (maxFromCompare > max) max = maxFromCompare
    })
    return max
}
function compare(n, k, s){
    var max = 0
    s.forEach(i => {
        if ((n & i) < k && (n & i) > max) max = (n & i)
    })
    return max
}