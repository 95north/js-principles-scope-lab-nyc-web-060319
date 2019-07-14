// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName(n) {
    // let o =  customerName.toUpperCase();
    n = customerName;
    // let o = n.toUpperCase();
    // return o;
    customerName = n.toUpperCase();  // had to change customerName var for this to work.
    return n.toUpperCase();
}

function setBestCustomer(n){
    // n = "not bob";
    window.bestCustomer = "not bob";
    // let return_val = bestCustomer;
    // console.log(bestCustomer);
    // console.log(return_val);
    return window.bestCustomer;
}

// Write a function that when called, declares a variable called bestCustomer
//  in global scope and assigns it to be 'not bob'. (Poor Bob.) Also, poor us,
//   declaring a global variable from inside a function is one of those things
//    we would never want to do normally, but is good for us to explore right now.


function overwriteBestCustomer(name){
    bestCustomer = name;
}

// : See the consequences of declaring a variable in global scope, 
// by writing a new function called overwriteBestCustomer() that changes 
// that bestCustomer variable.

const leastFavoriteCustomer = "tt";

function changeLeastFavoriteCustomer(name){
    leastFavoriteCustomer = name;
}