
// // regular function (not async)

// function getData(){
//     let data = 'empty';  
//     console.log('getting data');
//     setTimeout(() =>{
//         data = 'Important data!';
//     },1000)
//     return data;
//     }

//     const myData = getData();
//     console.log(myData);

// // async by callback function

// function getData(callback){
//     let data = 'empty';
//     console.log('getting data');
//     setTimeout(() =>{
//         data = 'Important data!';
//         callback(data);
//     },1000);
// }

// getData((someData) => {
//     console.log(someData);
// });

// // hell callback

// function getData(callback) {
//     // קוד להבאת מידע
//     }
//     function processA(data, callback) {
//     // קוד לעיבוד מידע
//     }
//     function processB(data, callback) {
//     // קוד לעיבוד מידע
//     }
//     function processC(data, callback) {
//     // קוד לעיבוד מידע 
//     }
//     function displayData(data) {
//     // קוד להצגת מידע 
//     }

//     getData(data => {
//         processA(data, processedDataA => {
//             processB(processedDataA, processedDataB => {
//                 processC(processedDataB, processedDataC => {
//                     displayData(processedDataC);
//                 });
//             });
//         });
//     });

// // promise function

// function getPromise(){
//     let num = -9;
//     let myPromise = new Promise ((resolve, reject) => {
//         if(num >= 0){
//             setTimeout(() => {
//                 resolve(9);
//             },1000)
//         }else{
//             setTimeout(() => {
//                 reject(new Error('no negative numbers'));    
//             },1000)
//         }
//     })
//     return myPromise;
// }

// // print promise
// const prom = getPromise();
// console.log(prom);

// // print value
// getPromise()
// .then((resolvedValue) => console.log(resolvedValue))
// .catch((error) => console.log(error))
// .finally(() => console.log('took time'))
