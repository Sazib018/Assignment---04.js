// Task Problem - 2 ::::

function matchFinder(string1 , string2) {
 const caseString1 = string1.toLowerCase();
 const caseString2 = string2.toLowerCase();
 return caseString1.includes(caseString2);
}

const words1 = matchFinder("John Doe", "ohn");
const words2 = matchFinder("Javascript", "code");
const words3 = matchFinder("Peter Parker", "pen");
const words4 = matchFinder("Peter Parker", "pet");
/* console.log(words1); */




   