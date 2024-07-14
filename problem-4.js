// Task Problem-4 ::::

function findAddress (object) {

const street = object.street || '--';
const house = object.house || '--';
const society = object.society || '--';
return `${street}, ${house}, ${society}`
}

const input = {street: 10, house: "15A", society: "Earth Perfec"};
const input2 = {street: 10, society: "Earth Perfect"};
const input3 = {street: 10};

/* console.log(findAddress(input));
console.log(findAddress(input2));
console.log(findAddress(input3)); */