// // 1

// function successPromise(){
//     let promise = new Promise((resolve, reject) => {
//         resolve('Success!');
//     });
//     return promise
// }

// successPromise().then((resolvedValue) => console.log(resolvedValue))

// // 2

// function getFullName(firstName, lastName, callback) {
//     setTimeout(() => {
//         const fullName = `${firstName} ${lastName}`;
//         callback(fullName);
//     }, 1000);
// }

// getFullName('Moshe', 'Knobloch', (fullName) => {
//     console.log(fullName);
// });

// // 3

// function addFive(number){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(number + 5);
//         },500)
//     });
// }

// function multiplyByTwo(number){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(number * 2);
//         },500)
//     });
// }

// function subtractTen(number){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(number - 10);
//         },500)
//     });
// }
// addFive(8)
//     .then(result => multiplyByTwo(result))
//     .then(result => subtractTen(result))
//     .then(finalResult => console.log(finalResult));


// 4

function divide(num1, num2){
    return new Promise ((resolve, reject) => {
        if (num2 != 0){
            setTimeout(() => {
                resolve(num1 / num2)
            },1000)    
        } else {
            setTimeout(() => {
                reject ('Cannot be divided by zero')
            },1000)
        }
    })
}

divide(3,0)
.then((resolvedValue) => console.log(resolvedValue))
.catch((error) => console.log(error))


// 5

