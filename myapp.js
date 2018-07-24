//logging exercise

// console.log( "Hello world 1" );

// console.log(200);

// console.log( true);

// console.log (null);

// var num = 10;

// console.log (num);

// console.log ("string" , 10.11, true, false, null, num);

//function exercise

function addTwoNumbers (num1, num2){
    console.log (num1 + num2);
    return (num1 + num2);
}

function makeCoffee (sugar, milk){
    var instructions = "Boil Water,";
    instructions += " Pour into Cup,";
    instructions += " add coffee granules,";
    instructions += " add " + sugar + " spoons of sugar,";
    instructions += " add " + milk + "%milk.";
    return instructions
}



console.log(addTwoNumbers (2,4));
console.log(makeCoffee(2,2));
