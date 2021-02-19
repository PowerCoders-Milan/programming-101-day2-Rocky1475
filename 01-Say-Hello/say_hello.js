//insert your pseudocode below
/*
we make 2 variables
create variable using my name
create variable using the Greeting
add them together 
print the message
run

*/

//insert your code below
var numbers;

function listsGetSortCompare(type, direction) {
    var compareFuncs = {
        "NUMERIC": function (a, b) {
            return Number(a) - Number(b);
        },
        "TEXT": function (a, b) {
            return a.toString() > b.toString() ? 1 : -1;
        },
        "IGNORE_CASE": function (a, b) {
            return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1;
        },
    };
    var compare = compareFuncs[type];
    return function (a, b) { return compare(a, b) * direction; }
}


numbers = [3, 1, 5];
window.alert(numbers.slice().sort(listsGetSortCompare("NUMERIC", 1)));