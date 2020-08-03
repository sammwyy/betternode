<p align="center">
  <img src="https://raw.githubusercontent.com/sammwyy/betterjs/master/docs/icon.png" width="100px">
  <h1 align="center">Better.js</h1>
</p>

- [Installation](#installation) 

## Installation
Import is as any other library.  
```javascript
require("betterjs");
```
Yes. That's it all.  

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
