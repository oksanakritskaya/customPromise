let testProm = new MyPromise(function(resolve, reject) {
    return resolve('test');
}).then(function(result) {
    console.log(result)
    return result;
});

function MyPromise(init) {
    let store = null;
    console.log('MyPromise');
    //console.log(call());
    init(resolve, reject);

    this.then = function(onResolve, onReject) {
        console.log('then');
        store = 'dfgdfgdfgdg';
        onResolve();
        return new MyPromise(callback);
    };

    function resolve(value) {
        console.log('resolve');
        setTimeout(function() {
            onResolve(value);
        });
    }

    function reject(value) {
        console.log('reject');
        setTimeout(function() {
            onReject(value);
        });
    }


    function onResolve(value) {
        store = value;
        console.log('onResolve');
        console.log(value);
        return value;
    }

    function onReject(value) {
        console.log('onReject');
        throw new Error("error");
    }
}