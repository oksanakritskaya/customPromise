function MyPromise(init) {
    let store;
    console.log('MyPromise');
    //console.log(call());
    init(resolve, reject);

    this.then = function(onResolve, onReject) {
        setTimeout(function() {
            console.log('then atart');
            return new MyPromise(function(resolve, reject) {
                console.log('--return new promise--');
                console.log(store);
                console.log('----------------------');
                console.log('then finish');
                return resolve(store);
            });
        });
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
        console.log('---onResolve---');
        store = value;
        console.log(value);
        console.log(store);
        console.log('---------------');
        return value;
    }

    function onReject(value) {
        store = value;
        console.log('onReject');
        throw new Error(value);
    }
}

let testProm = new MyPromise(function(resolve, reject) {
    resolve('test');
}).then(function(result) {
    console.log('-----then-----');
    console.log(result);
    console.log('--------------');
    console.log('--------------');
    return result;
});