console.log("This is from add.js file");
const add = (a,b) => {
    return a+b;
};
let sum = add(3,6);
console.log(sum);
const multy = (a,b) => {
    return a*b;
}
const div = (a,b) => {
    return a/b;
}
module.exports = multy;