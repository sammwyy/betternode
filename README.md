<p align="center">
  <img src="https://raw.githubusercontent.com/sammwyy/betterjs/master/docs/icon.png" width="100px">
  <h1 align="center">Better.js</h1>
</p>

- [Installation](#installation) 
- [Arrays](#arrays) 
- [Numbers](#numbers) 

## Installation
Import is as any other library.  
```javascript
require("betterjs");
```
Yes. That's it all.  

## Arrays
**1. Chunk**  
Split an array of element in to groups with the same size.  
```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.chunk(2)); // Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
console.log(arr.chunk(3)); // Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
console.log(arr.chunk(4)); // Output: [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10 ] ]
```

**2. Compact**  
Remove all falsey values from an array  
```javascript
let arr = [1, false, 3, null, "5", 0, 7, "text"]
console.log(arr.compact()); // Output: [ 1, 3, '5', 7 ]
```

**3. Difference**  
Creates an array of values not included in the other given array  
```javascript
let arr1 = [1, 2, 4, 5];
let arr2 = [1, 3, 5, 6];

console.log(arr1.difference(arr2)); // Output: [ 2, 4 ]
```

**4. Drop**
Slice an array in the specified position from the beginning  
```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.drop(1)); // Output: [ 2, 3, 4, 5, 6, 7, 8 ]
console.log(arr.drop(2)); // Output: [ 3, 4, 5, 6, 7, 8 ]
console.log(arr.drop(3)); // Output: [ 4, 5, 6, 7, 8 ]
```

**5. Drop Right**  
Slice an array in the specified position from the end  
```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.dropRight(1)); // Output: [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(arr.dropRight(2)); // Output: [ 1, 2, 3, 4, 5, 6 ]
console.log(arr.dropRight(3)); // Output: [ 1, 2, 3, 4, 5 ]
```

**6. DropIf**  
 Remove an item of the array if the condition is true  
 ```javascript
 let arr = ["rock", "plane", "apple", "rise", "banana", "red"];

console.log(arr.dropIf((item) => {
    return item.startsWith("r"); // Output: [ 'plane', 'apple', 'banana' ]
}))
```

**7. First**  
Get the first element of the array  
```javascript
let arr = ["blue", "green", "red", "yellow"]
console.log(arr.first()); // Output: blue
```

**8. Last**  
Get the last element of the array  
```javascript
let arr = ["blue", "green", "red", "yellow"]
console.log(arr.last()); // Output: yellow
```

**9. Remove**  
Removes an object from the array  
```javascript
let arr = ["blue", "green", "red", "yellow"]
console.log(arr.remove("green")); // Output: ["blue", "red", "yellow"]
```

**10. Take**
Take values from the array starting at the specified position from the beginning  
```javascript
let arr = ["rock", "plane", "apple", "rise", "banana", "red"];
console.log(arr.take(2)); // Output: [ 'rock', 'plane' ]
```

**11. Take Right**  
Take values from the array starting at the specified position from the end
```javascript
let arr = ["rock", "plane", "apple", "rise", "banana", "red"];
console.log(arr.takeRight(2)); // Output: [ 'banana', 'red' ]
```

**12. Take If**  
Take elements of an array from the beginning while the callback condition is true  
```javascript
 let arr = ["rock", "plane", "apple", "rise", "banana", "red"];

console.log(arr.takeIf((item) => {
    return item.startsWith("r"); // Output: [ 'rock', 'rise', 'red' ]
}))
```

**13. Union**  
Create an array of unique values from other or multiple arrays  
```javascript
let arr = ["airplane", "bed", "cow", "dog"];
let arr2 = ["pig", "apple", "dog", "apple"];

console.log(arr.union(arr2)); // Output: [ 'airplane', 'bed', 'cow', 'dog', 'pig', 'apple' ]
```

**14. Unique**  
Create an array from the unique values of the original array  
```javascript
let arr = [1, 2, 1, 3, 4, 5, 3, 6, 2];

console.log(arr.unique()); // Output: [ 1, 2, 3, 4, 5, 6 ]
```

## Numbers
**1. Clamp**  
Find a value between two values  
```javascript
let number = 12;

console.log(number.clamp(1, 7)); // Output: 7
console.log(number.clamp(1, 18)); // Output: 12
console.log(number.clamp(14, 18)); // Output: 14
```

**2. Cos**  
Returns the cos of a number  
```javascript
let number = 5;
console.log(number.cos()); // Output: 0.28366218546322625
```

**3. isEven**  
Return true if the number is event  
```javascript
let number = 12;
console.log(number.isEven()); // Output: true
```

**4. Lerp**  
Interpolate between two values  
```javascript
let number = 5;
console.log(number.lerp(0, 1.5)); // Output: -2.5
```

**5. Percentage**  
Get the percentage of a number  
```javascript
let number = 500;
console.log(number.percentage(25)); // Output: 125
```

**6. Pow** 
Pow a number y a exponent  
```javascript
let number = 3;
console.log(number.pow(2)); // Output: 8
console.log(number.pow(3)); // Output: 27
```

**7. Sin**  
Returns the sin of a number  
```javascript
let number = 2;
console.log(number.sin()); // Output: 0.9092974268256817
```

**8. Sqrt**  
Get square root of a number  
```javascript
let number = 25;
console.log(number.sqrt()); // Output: 5
```

**9. Tan**  
Returns the tan of a number  
```javascript
let number = 6;
console.log(number.tan()); // Output: -0.29100619138474915
```
