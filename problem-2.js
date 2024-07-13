// Task Problem - 2 ::::

function matchFinder(string1 , string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'check your string';
    }
    if (string1.includes(string2) || string2.includes(string1)) {
       return true; 
    }
    else{
        return false;
    }
}
const words = matchFinder("john doe", "ohn");
const words2 = matchFinder("javascript", "code")
/* console.log(words2); */

   