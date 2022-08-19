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

/** JavaScript Dates */
function getDayName(dateString) {
    let dayName;
    const date = new Date(dateString);
    const UTCDay = date.getUTCDay();
    
    switch(UTCDay){
        case 0: dayName = 'Sunday'; break;
        case 1: dayName = 'Monday'; break;
        case 2: dayName = 'Tuesday'; break;
        case 3: dayName = 'Wednesday'; break;
        case 4: dayName = 'Thursday'; break;
        case 5: dayName = 'Friday'; break;
        case 6: dayName = 'Saturday';
    }
    
    return dayName;
}