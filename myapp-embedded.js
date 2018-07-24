var car = {
    make : "Volvo",
    speed : 160,
    engine : {
        size: 2.0,
        make: "BMW",
        fuel: "Petrol",
        pistons: [ {Maker : "BMW"},{Maker : "BMW"}]
    },
    drive : function(){return "Drive";}
};

var array = [ "String",
                100, 
                [ "Embed", 200],
                { car : "Ford"},
                function() {return "drive";}
            ];


//Member Access
console.log(car.make);
console.log(car.engine.size);
console.log(car.drive());

//Array Access
console.log(car.engine.pistons[0]);
//Member inside a array
console.log(car.engine.pistons[0].Maker);
//Access Array
console.log(array[0]);
//Access function inside an array
console.log(array[4]());




