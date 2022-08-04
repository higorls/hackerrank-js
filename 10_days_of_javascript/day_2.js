/** Loops */
function vowelsAndConsonants(s) {
    for(let i=0;i<s.length;i++){
        if(/^[aeiou]$/i.test(s[i])) console.log(s[i])
    }
    for(let i=0;i<s.length;i++){
        if(!/^[aeiou]$/i.test(s[i])) console.log(s[i])
    }
}