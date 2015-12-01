    
function sortFirstcolumn(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
    
    
function sortSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

/*
var myStack=[];
var row = [];
var fname = "Peter";
row.push(fname);
var lname = "Johnson";
row.push(lname);
var job = "Game Director";
row.push(job);
myStack.push(row);
  
myStack.sort(sortFirstcolumn);
*/