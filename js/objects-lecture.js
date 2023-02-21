"use strict";

// let car = {};
//
// car.make = "Toyota";
// car[`model`] = `Camry`;
//Logging the variable car will pull up the make and models

let cars = [
    {
    make: `Toyota`,
    model: `Camry`,
    numberOfWheels: 4,
    features: [`Automatic Windows`, `Bluetooth Connectivity`, `GPS Navigation`],
    owner: {
        name: `Jane Doe`,
        age: 30
    }
},
{
    make: `Honda`,
        model: `Accord`,
    numberOfWheels: 4,
    features: [`Automatic Windows`, `Great Gas Mileage`, `AM/FM Radio`],
    owner: {
        name: `Jane Doe`,
            age: 30
    }
}
];

// // DONT DO THIS
// var car = {
//     "number of wheels": 4
// };
// // do this instead
// var car = {
//     numberOfWheels: 4
// };
// // DONT DO THIS
// car["number of wheels"] = 4;
// // do this instead
// car.numberOfWheels = 4;


//method
const fighter = {
    name: `Arata`,
    hitpoints: 18,
    maxDamage: 8,
    attack: function(enemy){
        console.log(`${enemy.name} has ${enemy.hitpoints} hitpoints`)
        console.log(`${this.name} attacks!`);
        const damage = Math.ceil(Math.random() * this.maxDamage);
        console.log(`${this.name} does ${damage} points of damage!`);
        enemy.hitpoints -= damage;
        console.log(`${enemy.name} has ${enemy.hitpoints} HP left!`)
    }
}

const fighter2 = {
    name: `Bigfoot`,
    hitpoints: 17,
    maxDamage: 10,
    attack: function(){
        console.log(`${this.name} Arata attacks!`);
    }
}

const monster = {
    name: `Goblin`,
    hitpoints: 8,
    maxDamage: 6
}

const controller = {
    attack: function(attacker, defender){
        const startingHp = defender.hitpoints;
        const damage = Math.ceil(Math.random() * attacker.maxDamage);
        defender.hitpoints -= damage;
        view.displayAttackResults(attacker.name, defender.name, startingHp, defender.hitpoints, damage);
    }
}

const view = {
    displayAttackResults: function(attackerName, defenderName, hpBeforeAttack, hpAfterAttack, damage){
        console.log(`${defenderName} has ${hpBeforeAttack} HP!!`);
        console.log(`${attackerName} attacks!`);
        console.log(`${attackerName} does ${damage} HP`);
        console.log(`${defenderName} now has ${hpAfterAttack} HP left`)
    }
}

