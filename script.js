//WRITE YOUR CODE BELOW

var customerDrink = {
    drink: "coffee",
    type: "latte",
    Sugars: 5,
    isReady: true
    // janesOrder: function() {
        // alert("Jane: " + drinkName.drink + " " + drinkName.Sugars + "  is ready");
// }
};

console.log(customerDrink);

if (customerDrink.isReady) {
    console.log("Ready for pick-up: " + customerDrink.type + " with " + customerDrink.Sugars + " sugars. ")

} else {
    console.log("Still in order queue: " + customerDrink["drink"] + " with " + customerDrink["Sugars"] + " sugars")
}

// var janesOrder = function() {

// if (janesOrder.isReady) {
    // alert("Jane: " + drinkName.type + " " + drinkName.Sugars + "  is ready");


//     console.log("Ready for pickup: " + drinkName.drink + " with " + drink.Sugers + " sugars ")


// } else { 
//     console.log("Still in order queue: " + drinkName["drink"] + " with " + drink.Sugers + " sugars")
// }



// janesOrder();