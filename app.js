// TASK 1
// let arr1 = [0,1,2]
// let arr2 = [3,5,9]
// let array = arr1.concat(arr2)
// console.log(array)

//TASK 2

// let arr1 = [0, 1 ,2, "2", null, 0, undefined, NaN, 6, 'sad', " "]
// let arr2= []
// arr1.forEach(el => {
//     if(Number(el)  || typeof(el)=="string" && el.length>0) {
//         arr2.push(el)
//     } 
// })
// console.log(arr2);

// TASK 3

// function array_filled(a, b) {
//   let array = [];
//   for (let i = 0; i < a; i++) {
//     array.push(b);
//   }
//   return array;
// }

// console.log(array_filled(6, 0));

// TASK 4
// function move(arr, count1, count2) {
// 	const element = arr.splice(count1, 1)[0];
// 	arr.splice(count2, 0, element);
// 	return arr;
// }

// console.log(move([10, 20, 30, 40, 50], 0, 2));


// TASK 5

// function array_range(num1, num2) {
// 	let newArr = [];
// 	for (let i = num1; i < num2 + num1; i++) {
// 		newArr.push(i);
// 	}
// 	return newArr;
// }

// console.log(array_range(1, 4));

// TASK 6

// function primeNumber (arr){
//     let newArr=[]
//     if(arr.includes(2)){
//         newArr.push(2)
//     }
//     arr.forEach(element => {
//         console.log(newArr);
//         if(element%2==1){
//             newArr.push(element);
//         }
//     });
//     if(newArr.length==arr.length){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(primeNumber([2,3,5,7,8]))

// TASK 7

// function uniqueNumbers(arr){
//     let array=[]

//     for(let i=0; i<arr.length; i++){

//         if(!array.includes(arr[i])){
//             array.push(arr[i])
//         }

//     }
//     console.log(array)
// }

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5])


// TASK 8

// function difference(arr1,arr2){

//     for(let i=0; i<arr2.length; i++){
//         arr1.push(arr2[i])
//     }
//     let arrayDif = []
//     for(let i=0; i<arr1.length; i++){
//         if(arrayDif.includes(arr1[i]) == false){
//             arrayDif.push(arr1[i])
//         }
//     }
//     console.log(arrayDif.sort((a,b) => {return a-b}))
// }

// difference([1, 2, 3], [100, 2, 1, 10])

// TASK 10


// TASK 9

// function difference(arr1,arr2){
//     let newArr=[]
//     arr1.forEach(element => {
//       if(arr2.includes(element)==false){
//           newArr.push(element)
//       }
//     });
//     arr2.forEach(element=>{
//       if(arr1.includes(element)==false){
//           newArr.push(element)
//       }
//     })
  
//     console.log(newArr.sort((a,b)=>{return a-b}))
//   }
  
//   difference([1, 2, 3], [100, 2, 1, 10])

// TASK 10
// let arrShuffle = [4, 5, 8, 9, 12, 9];

// function shuffleJs(arr) {
//     let shuffledArray = [];
//     let random = [];
//     for (let x in arr) {
//         let randomNumber = Math.floor(Math.random() * arr.length);
//         while (random.includes(randomNumber)) {
//             randomNumber = Math.floor(Math.random() * arr.length);
//         }
//         random.push(randomNumber);
//         shuffledArray.push(arr[randomNumber]);
//     }
//     return shuffledArray
// }

// console.log(shuffleJs(arrShuffle));