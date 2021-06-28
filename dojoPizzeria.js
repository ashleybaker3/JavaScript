// function pizzaOven(crust, sauce, cheese, toppings) {
//     var pizza = {}
//     pizza.crust = crust;
//     pizza.sauce = sauce;
//     pizza.cheese = cheese;
//     pizza.toppings = toppings;
//     return pizza;
// }

// var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"])
// console.log(p1)

// var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
// console.log(p2)

// var p3 = pizzaOven("hand tossed", "traditional", "mozzarella", ["olives", "pepperoni", "mushrooms", "onions"])
// console.log(p3)

// var p4 = pizzaOven("stuffed crust", "alfredo", "asiago", ["chicken", "sausage", "honey drizzle"])
// console.log(p4)


    var pizzaR = {
        crust: ["deep dish", "thin crust", "hand tossed", "stuffed crust"];
        sauce: ["marinara", "alfredo", "pesto", "traditional"];
        cheese: ["mozzarella", "asiago", "feta"];
        toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions", "honey drizzle"];

        randomPizza function() {
            console.log(this.crust[Math.floor(Math.random() * 4)])
        }

    }

   
    return pizza;
    // return obj[pizza[pizza.length * Math.random() << 0]];
}

var randoP = randomPizza();
console.log(randoP);

// I tried, but it is late and too hot to think right now :(