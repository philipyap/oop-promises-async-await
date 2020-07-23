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

 