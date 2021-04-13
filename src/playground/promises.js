const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Nghia Doan',
            message: 'This is my resolved data'
        });
        // reject('Something went wrong');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('Resolved:', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise!');
        }, 1500);
    });
}).then((data) => {
    console.log('Does this run?!', data);
}).catch((error) => {
    console.log('Rejected:', error);
});

console.log('after');