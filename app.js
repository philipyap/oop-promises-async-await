 const dog = {
     name: 'Michael',
     goodBoy: true,
     gender: 'girl'

 }

 const dogTwo = {
    name: 'Rocco',
    color: 'brown',

 }

 dogTwo.__proto__ =dog;

 console.log(dogTwo)
 console.log(dog)
 console.log(dogTwo.goodBoy)
 console.log(dogTwo.name);

 // make two object
 // one object needs to inherit from the other object.

 const apple = {
     color: 'red',
     taste: 'sweet',
     shape: 'round'
 }

 const banana ={
     color: 'yellow',
     shape: 'long'
 }

 banana.__proto__ = apple;
 console.log(apple)
 console.log(banana)
 console.log(banana.taste)
 console.log(banana.color)
 banana.color = 'red';
 console.log(banana.color)


 // Contructor Functions

 function User(name){
    // this  
    
    this.name = name;

     //return this

 }

 let adam = new User('Adam');
 let pete = new User('Pete');
 console.log(adam.name);
 console.log(pete.name);

 function NBAPlayer(name, team, threePointShooter){
     //this = {}
     this.name = name;
     this.team = team;
     this.threePointShooter = threePointShooter;
 }

 let steph = new NBAPlayer('Steph Curry', 'Warriors', true);

 
 console.log(steph);
 console.log(steph.name);

function fruitType(name, color, size){

    this.name = name;
    this.color = color;
    this.size = size;

}
let watermelon = new fruitType('Watermelon', 'Green', 'Huge');
console.log(watermelon)