/* Find a value between two values */
Object.defineProperty(Number.prototype, 'clamp', {
    value: function(min, max) {
        if (this < min) return min;
        if (this > max) return max;
        return this + 0;
    }
});

/* Returns the cos of a number */
Object.defineProperty(Number.prototype, 'cos', {
    value: function() {
        return Math.cos(this);
    }
});

/* Return true if the number is even */
Object.defineProperty(Number.prototype, 'isEven', {
    value: function() {
        return (this % 2) == 0;
    }
});

/* Interpolate between two values */
Object.defineProperty(Number.prototype, 'lerp', {
    value: function(b, value) {
        let a = this;
        return a * (1 - value) + b * value;
    }
});

/* Get the percentage of a number */
Object.defineProperty(Number.prototype, 'percentage', {
    value: function(percentage) {
        return (this / 100) * percentage;
    }
});

/* Pow a number y a exponent */
Object.defineProperty(Number.prototype, 'pow', {
    value: function(by = 2) {
        return Math.pow(by, this);
    }
});

/* Get random number between 2 numbers */
Object.defineProperty(Number.prototype, 'random', {
    value: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});

/* Returns the sin of a number */
Object.defineProperty(Number.prototype, 'sin', {
    value: function() {
        return Math.sin(this);
    }
});

/* Get square root of a number */
Object.defineProperty(Number.prototype, 'sqrt', {
    value: function() {
        return Math.sqrt(this);
    }
});

/* Returns the tan of a number */
Object.defineProperty(Number.prototype, 'tan', {
    value: function() {
        return Math.tan(this);
    }
});