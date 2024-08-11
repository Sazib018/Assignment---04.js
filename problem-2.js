// Task Problem - 2 ::::

function matchFinder(string1 , string2) {
    if (typeof(string1) !== 'string' || typeof(string2) !== 'string') {
        return 'please add string'
    }
    else if (string1.includes(string2) === true) {
        return true
    }
    else{
        return false
    }
}
console.log(matchFinder("John Doe", "ohn"));
console.log(matchFinder("Javascript", "code"));
console.log(matchFinder("Peter Parker", 5));






   