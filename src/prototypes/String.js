/* Capitalize the first character of the string */
Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
        return this.replace(this[0], this[0].toUpperCase());
    }
});

/* Set all characters to lowercase except first character of each word */
Object.defineProperty(String.prototype, 'capitalizeAll', {
    value: function() {
        let words = this.split(" ");
        let out = [];
        for (let word of words) {
            out.push(word.toLowerCase().replace(word[0], word[0].toUpperCase()));
        }

        return out.join(" ");
    }
});

/* Escapes HTML string */
Object.defineProperty(String.prototype, 'escapeHTML', {
    value: function() {
        return this.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
});

/* Returns true if string is empty or whitespaces */
Object.defineProperty(String.prototype, 'isEmpty', {
    value: function() {
        let str = this.replace(/ /gi, '');
        return str == true;
    }
});

/* Check if the string is lowercase */
Object.defineProperty(String.prototype, 'isLowercase', {
    value: function() {
        return this == this.toLowerCase();
    }
});

/* Check if the string is uppercase */
Object.defineProperty(String.prototype, 'isUppercase', {
    value: function() {
        return this == this.toUpperCase();
    }
});

/* Log in the console */
Object.defineProperty(String.prototype, 'print', {
    value: function() {
        console.log(this.toString());
    }
});

/* Normalize doublespaces */
Object.defineProperty(String.prototype, 'normalizeSpaces', {
    value: function() {
        let str = this;
        while (str.includes("  ")) {
            str = str.replace("  ", " ");
        }
        return str;
    }
});

/* Replace all in a string */
Object.defineProperty(String.prototype, 'replaceAll', {
    value: function(search, replacement) {
        let regex = new RegExp(search, 'gi');
        return this.replace(regex, replacement);
    }
});

/* Parse to Boolean */
Object.defineProperty(String.prototype, 'toBool', {
    value: function() {
        let str = this.toLowerCase().replace(/ /gi, "");

        if (str == "true") {
            return true;
        } else if (str == "false") {
            return false;
        } else {
            return null;
        }
    }
});


/* Parse to float */
Object.defineProperty(String.prototype, 'toFloat', {
    value: function() {
        let str = this.toLowerCase().replace(/ /gi, "");
        return parseFloat(str);
    }
});


/* Parse to integer */
Object.defineProperty(String.prototype, 'toInt', {
    value: function() {
        let str = this.toLowerCase().replace(/ /gi, "");
        return parseInt(str);
    }
});

/* Parse to json */
Object.defineProperty(String.prototype, 'toJSON', {
    value: function() {
        try {
            return JSON.parse(this);
        } catch (e) {
            return null;
        }
    }
});

/* Truncate a text and make it more shortly */
Object.defineProperty(String.prototype, 'truncate', {
    value: function(length = 16) {
        return this.slice(0, length) + "...";
    }
});

/* Get array of words in a string */
Object.defineProperty(String.prototype, 'words', {
    value: function() {
        return this.split(" ");
    }
});