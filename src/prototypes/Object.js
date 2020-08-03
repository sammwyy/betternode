/* Finds a field in the object with a string and returns the result */
Object.defineProperty(Object.prototype, 'getField', {
    value: function(find_string) {
        let obj = this;
        let queries = find_string.split(".");

        for (let query of queries) {
            if (obj == null) {
                return null;
            }

            obj = obj[query];
        }

        return obj;
    }
});