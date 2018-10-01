var Callbacks = function() {
    return {
        resolve_c: 'resolve_c',
        reject_c: 'reject_c'
    }
};

let testProm = new MyPromise(callback);

function MyPromise(callback) {
    callback(resolve, reject);
    this.then = function() {
        return new MyPromise(callback);
    };

    this.catch = function() {

    };

    function resolve(result) {
        resolve_c[type]
    }

    function reject() {
        throw new Error("error");
    }
}

console.log(testProm);