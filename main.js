// console.log('GOOD LUCK 👩‍💻 👨‍💻')
/* Q1:
Usind For Each
Create a function called addKeyPowerIndex
that takes an array of objects as a parameter
and return this array with add a key to each object
that is the (index) of this object in this array
and the value will be the (power) of the index

var arrOfObj1 = [
  { a: 12 },
  { b: 5 },
  { c: 16 },
  { d: 4 },
  { e: 3 }
]

Ex: addKeyPowerIndex(arrOfObj1)
=> [
  {0: 0, a: 12},
  {1: 1, b: 5},
  {2: 4, c: 16},
  {3: 9, d: 4},
  {4: 16, e: 3}
] 

var arrOfObj2 = [
  { a: 'cat' },
  { b: 'dog' },
  { c: 'duck' }
]

Ex: addKeyPowerIndex(arrOfObj2)
=> [
  {0: 0, a: 'cat'},
  {1: 1, b: 'dog'},
  {2: 4, c: 'duck'}
]   
*/

function addKeyPowerIndex(arr) {
  // WRITE YOUR CODE UNDER THIS LINE  
  var arrOfObj1 = [
    { a: 12 },
    { b: 5 },
    { c: 16 },
    { d: 4 },
    { e: 3 }
  ]
arr.forEach(function(index,element){
arr.push(index[0] ,element*index) 

})
return arrOfObj1
}







/* Q2:
Usind Map
Create a function called decreseBy
that takes an array of numbers and number as a parameter
and return a new array after will decrease this number 
from each element in this array

var arrOfNum1 = [77,5,33]
Ex: decreseBy(arrOfNum1,10)
=> [67,-5,23]

Ex: decreseBy(arrOfNum1,-6)
=> [83, 11, 39]
*/

function decreseBy(arr,num) {
  // WRITE YOUR CODE UNDER THIS LINE 
  var arrOfNum1 = [77,5,33]
  var map1 = arr.map(x => x - num);
}
  return arrOfNum1






/* Q3:
Using Filter
Create a function called nameLongerThan
that takes an array of objects and number as a parameter
and return a new array with only the object has a value inside 
the key name longer than this number

var arrOfObj3 = [
  { name: "alex" },
  { name: "mercer"},
  { name: "alice" },
  { name: "zaheer"},
  { name: "elizabeth"}
]
Ex: nameLongerThan(arrOfObj3,4)
=>[
  { name: "mercer"},
  { name: "alice" },
  { name: "zaheer"},
  { name: "elizabeth"}
]

Ex: nameLongerThan(arrOfObj3,6)
=>[
  { name: "elizabeth"}
]
*/

function nameLongerThan(arr,num) {
  // WRITE YOUR CODE UNDER THIS LINE         
  var arrOfObj3 = [
    { name: "alex" },
    { name: "mercer"},
    { name: "alice" },
    { name: "zaheer"},
    { name: "elizabeth"}
   var result = arrOfObj3.filter(name => name.length > num);


return result

  }




/* Q4:
Using Reduce
Create a function called avgLength
that takes an array of objects of strings and key as a parameter
and return the avg of the length of this key inside this objects

var arrOfObj4 = [
  { name: "alex", food: "fried chiken" },
  { name: "mercer", food: "pizaa" },
  { name: "alice", food: "burger" },
  { name: "zaheer", food: "hot dog" },
  { name: "elizabeth", food: "eggs" }
]
Ex: avgLength(arrOfObj4,"name")
=> 6

Ex: avgLength(arrOfObj4,"food")
=> 6.8
*/

function avgLength(arr,name) {
  // WRITE YOUR CODE UNDER THIS LINE         
  var arrOfObj4 = [
    { name: "alex", food: "fried chiken" },
    { name: "mercer", food: "pizaa" },
    { name: "alice", food: "burger" },
    { name: "zaheer", food: "hot dog" },
    { name: "elizabeth", food: "eggs" }
    var sum = arrOfObj4.reduce(function (acc, elem) {
      return (acc + elem)/name.length;
    }, 0);
    return sum
}

// Good luck :)