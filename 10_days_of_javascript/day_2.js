/** Conditional Statements: If-Else */
function getGrade(score) {
    let grade;
    if (score <= 5) grade = 'F'
    else if (score <= 10) grade = 'E'
    else if (score <= 15) grade = 'D'
    else if (score <= 20) grade = 'C'
    else if (score <= 25) grade = 'B'
    else grade = 'A'
    
    return grade;
}

/** Conditional Statements: Switch */
function getLetter(s) {
    let letter;
    switch(s.charAt(0)){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A'
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B'
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C'
            break;
        default:
            letter = 'D'
    }
    
    return letter;
}

/** Loops */
function vowelsAndConsonants(s) {
    for(let i=0;i<s.length;i++){
        if(/^[aeiou]$/i.test(s[i])) console.log(s[i])
    }
    for(let i=0;i<s.length;i++){
        if(!/^[aeiou]$/i.test(s[i])) console.log(s[i])
    }
}