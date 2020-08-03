<p align="center">
  <img src="https://raw.githubusercontent.com/sammwyy/betterjs/master/docs/icon.png" width="100px">
  <h1 align="center">Better.js</h1>
</p>

- [Installation](#installation) 
- [Arrays](#arrays) 
- [Numbers](#numbers) 
- [Objects](#object) 
- [Strings](#strings) 

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

## Objects
**1. Get Field**  
Finds a field in the object with a string and returns the result  
```javascript
let obj = {
  "a": {
    "b": {
      "c": "Hello world"
    }
  }
}

console.log(obj.getField("a.b.c")); // Output: Hello world
```

## Strings
**1. Capitalize**  
Capitalize the first character of the string  
```javascript
let str = "hello my friend";
console.log(str.capitalize()); // Output: Hello my friend
```

**2. Capitalize All**  
Set all characters to lowercase except first character of each word  
```javascript
let str = "hello my friend";
console.log(str.capitalizeAll()); // Output: Hello My Friend
```

**3. Escape HTML**  
Escapes HTML string  
```javascript
let str = "<a>Hello & Welcome</a>";
console.log(str.escapeHTML()); // Output: &lt;a&gt;Hello &amp; Welcome&lt;/a&gt;
```

**4. Is Empty**
Returns true if string is empty or whitespaces  
```javascript
let str = "";
console.log(str.isEmpty()); // Output: true
```

**5. Is Lowercase**  
Check if the string is uppercase  
```javascript
let str = "hello";
console.log(str.isLowerCase()); // Output: true

let str2 = "Hello";
console.log(str2.isLowerCase()); // Output: false
```

**6. Is Uppercase**  
Check if the string is uppercase  
```javascript
let str = "HELLO";
console.log(str.isUpperCase()); // Output: true

let str2 = "HELLo";
console.log(str2.isUpperCase()); // Output: false
```

**7. Print**  
Log in the console a string  
```javascript
let str = "hello world";
str.log(); // Output: hello world
```

**8. Normalize Spaces**  
Normalize doublespaces  
```javascript
let str = "hello    world  to    my friends !";
console.log(str.normalizeSpaces()); // Output: "hello world to my friends !"
```

**9. Replace All**  
Replace all in a string  
```javascript
let str = "the car is red, red is the car";
console.log(str.replace("red, "blue"); // Output: the car is blue, red is the car
console.log(str.replaceAll("red, "blue"); // Output: the car is blue, blue is the car
```

**10. To Bool**  
Parse to Boolean a string  
```javascript
let str = "true";
console.log(str.toBool()); // Output: true;

let str2 = "false";
console.log(str2.toBool()); // Output: false;

let str3 = "a text";
console.log(str3.toBool()); // Output: null;
```

**11. To Float**  
Parse to Float a string  
```javascript
let str = "3.141592";
console.log(str.toFloat()); // Output: 3.141592
```

**12. To Integer**  
Parse to Integer a string  
```javascript
let str = "45";
console.log(str.toInt()); // Output: 45
```

**13. To JSON**  
Parse to JSON a string  
```javascript
let str = "{\"hello\": \"world\"}";
console.log(str.toJSON()); // Output: { hello: 'world' }
```

**14. Truncate**  
Truncate a text and make it more shortly  
```javascript
let str = "hello world";
console.log(str.truncate(7)); // Output: hello w...
```

**15. Words**  
Get array of words in a string  
```javascript
let str = "the apple is red";
console.log(str.words()); // Output: ["the", "apple", "is", "red"]
```
