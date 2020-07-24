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
     this.intro = function(){
         console.log('hi, my name is ' + this.name);
     }
 }

 let steph = new NBAPlayer('Steph Curry', 'Warriors', true);

 
 console.log(steph);
 console.log(steph.name);
 steph.intro();

function fruitType(name, color, size){

    this.name = name;
    this.color = color;
    this.size = size;
    this.intro = function(){
        console.log('my fruit is ' + this.name)
    }

}
let watermelon = new fruitType('Watermelon', 'Green', 'Huge');
console.log(watermelon)
watermelon.intro();


// class
class Car {
    constructor(year, make, model, color){
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }

    drive(){
        console.log('Vroom');
    }
    intro(){
        console.log('this is a ' + this.make + ' ' + this.model);
    }
}

let tesla = new Car ('2020', 'Tesla', 'Model S', 'red');
console.log(tesla);
tesla.drive();
tesla.intro();


// combine with fetch 

class GithubProfile {
    constructor (username, name, url){
        this.username = username;
        this.name = name;
        this.url = url;
    }
    intro(){
        console.log(`My name is ${this.name} and my username is @${this.username}`)
    }
}

fetch('https://api.github.com/users/philipyap')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    let githubURL = data.url;
    console.log(githubURL);
    let githubUsername = data.login;
    console.log(githubUsername);
    let githubName = data.name;
    console.log(githubName);

    let philipyap = new GithubProfile(githubURL, githubName, githubUsername);
    console.log(philipyap);
    philipyap.intro();
})

// ES5: Part 1

 let isMomHappy = true;

// // Promise
// let willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             let phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             let reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

//     }
// );
// console.log(willIGetNewPhone)

let willIGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy) {
        const phone = {
        brand:'Iphone',
        color: 'red'
    }
    resolve(phone);
}
else {
    reject('No Phone');
}
})
willIGetNewPhone.then(result =>{
    console.log(result);

})

//async function

async function printUsers() {
    const endpoint = 'https://api.github.com/users/philipyap';
    
    let philip = await fetch(endpoint).then(res => res.json());
    console.log(philip);
  }
  printUsers();

  // same as..
  // fetch(endpoint)
  //.then(response =>{
  //    return response.json();
  //})

async function printFacebook(){
    let faceBookEndpoint = 'https://api.github.com/users/facebook';
    let philipyap = await fetch(faceBookEndpoint).then(response => response.json());
    console.log(philipyap);
}
printFacebook();