var Pizza1 = {
    crustType: "Deep dish",
    sauceType: "traditional",
    cheeses: ["mozzarella"],
    toppings: ["pepperoni", " and sausage"],
    pizzaOrder1: function() {
        console.log(this.crustType, "pizza order #1 with " + this.sauceType +  " sauce, " + this.cheeses + " cheese, " + this.toppings + " is now ready!");
    }
}

var Pizza2 = {
    crustType: "Hand tossed",
    sauceType: "marinara",
    cheeses: ["mozzarella", " feta"],
    toppings: ["mushrooms", " olives", " and onions"],
    pizzaOrder2: function() {
        console.log(this.crustType, "pizza order #2 with " + this.sauceType +  " sauce, " + this.cheeses + " cheese, " + this.toppings + " is now ready!");
    }
}

var Pizza3 = {
    crustType: "Hand tossed",
    sauceType: "alfredo",
    cheeses: ["mozzarella", " feta"],
    toppings: ["roasted garlic", " green olives", " arugala", " basil", " and prosciutto"],
    pizzaOrder3: function() {
        console.log(this.crustType, "pizza order #3 with " + this.sauceType +  " sauce, " + this.cheeses + " cheese, " + this.toppings + " is now ready!");
    }
}

var Pizza4 = {
    crustType: "Thin crust",
    sauceType: "marinara",
    cheeses: ["mozzarella", " parmesan"],
    toppings: ["mushrooms", " saugage", " and black olives"],
    pizzaOrder4: function() {
        console.log(this.crustType, "pizza order #4 with " + this.sauceType +  " sauce, " + this.cheeses + " cheese, " + this.toppings + " is now ready!");
    }
}

function getRandomPizza(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // return Math.floor(Math.random() * (max - min +1));
        if(Math.floor(Math.random() * (max - min +1)) == 1) {
            Pizza1.pizzaOrder1();
        }
            else if(Math.floor(Math.random() * (max - min +1)) == 2) {
                Pizza2.pizzaOrder2();
            }
            else if(Math.floor(Math.random() * (max - min +1)) == 3) {
                Pizza3.pizzaOrder3();
            }
            else {
                Pizza4.pizzaOrder4();
            }
    }

Pizza1.pizzaOrder1();
Pizza2.pizzaOrder2();
Pizza3.pizzaOrder3();
Pizza4.pizzaOrder4();
console.log("And the random pizza of the day is:")
getRandomPizza(0,4);


