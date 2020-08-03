/* Split an array of element in to groups with the same size. */
Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize = 1) {
        var array = [];
        for (var i = 0; i < this.length; i += chunkSize)
            array.push(this.slice(i, i + chunkSize));
        return array;
    }
});

/* Remove all falsey values from an array. */
Object.defineProperty(Array.prototype, 'compact', {
    value: function() {
        return this.filter((el) => {
            return el != null && !isNaN(el) && el != false;
        })
    }
});

/* Creates an array of values not included in the other given array. */
Object.defineProperty(Array.prototype, 'difference', {
    value: function(arr = []) {
        return this.filter(x => !arr.includes(x));
    }
});

/* Slice an array in the specified position from the beginning */
Object.defineProperty(Array.prototype, 'drop', {
    value: function(position = 0) {
        return this.filter(x => this.indexOf(x) >= position);
    }
});

/* Slice an array in the specified position from the end */
Object.defineProperty(Array.prototype, 'dropRight', {
    value: function(position = 0) {
        position = this.length - position - 1;
        return this.filter(x => this.indexOf(x) <= position);
    }
});

/* Slice an array from the beginning while the callback condition is true */
Object.defineProperty(Array.prototype, 'dropIf', {
    value: function(callback) {
        let array = [];
        for (let item of this) {
            let result = callback(item);
            if (!result) {
                array.push(item);
            }
        }
        return array;
    }
});

/* Get the first element of the array */
Object.defineProperty(Array.prototype, "first", {
    value: function() {
        return this[0];
    }
})

/* Get the last element of the array */
Object.defineProperty(Array.prototype, "last", {
    value: function() {
        return this[this.length - 1];
    }
})

/* Removes an object from the array */
Object.defineProperty(Array.prototype, "remove", {
    value: function(object) {
        return this.filter(x => x != object);
    }
});

/* Take values from the array starting at the specified position from the beginning */
Object.defineProperty(Array.prototype, "take", {
    value: function(position = 1) {
        return this.filter(x => this.indexOf(x) < position);
    }
});

/* Take values from the array starting at the specified position from the end */
Object.defineProperty(Array.prototype, "takeRight", {
    value: function(position = 1) {
        position = this.length - position - 1;
        return this.filter(x => this.indexOf(x) > position);
    }
});

/* Take elements of an array from the beginning while the callback condition is true */
Object.defineProperty(Array.prototype, 'takeIf', {
    value: function(callback) {
        let array = [];
        for (let item of this) {
            let result = callback(item);
            if (result) {
                array.push(item);
            }
        }
        return array;
    }
});

/* Create an array of unique values from other or multiple arrays */
Object.defineProperty(Array.prototype, 'union', {
    value: function(...arrays) {
        let arr = this;
        for (let array of arrays) {
            arr = arr.concat(array);
        }

        return arr.filter((v, i, a) => a.indexOf(v) === i);
    }
});

/* Create an array from the unique values of the original array */
Object.defineProperty(Array.prototype, 'unique', {
    value: function() {
        return this.filter((v, i, a) => a.indexOf(v) === i);
    }
});