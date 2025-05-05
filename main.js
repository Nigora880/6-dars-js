// 1

// let person = {
//     name: "Asilbek",
//     age: "20",
//     job: "meneger",
//     interest: "game",
//     hobby: "sleep",
//     number: "+998998640825",
//     username: "M.A.I"
// }
// console.log(Object.entries(person));

// 2

// const person1 = Object.assign({name: "Asilbek"},{age: 20})
// const person2 =Object.assign ({interest: "game"},{hobby: "sleep"})
// console.log(person1);
// console.log(person2);

// 3

// let numbers = [];
// for (let i = 0; i < 10; i++) {
//   numbers.push(Math.floor(Math.random() * 10));
// }

// console.log("1-array:", numbers);
// // lastVALUE=lValue
// let lValue = numbers[numbers.length - 1];
// // newValue=nValue   
// let nValue = lValue + 1;
// numbers.push(nValue);

// console.log("2-array:", numbers);

// 4

// let numbers = [];
// for (let i = 0; i < 10; i++) {
//   numbers.push(Math.floor(Math.random() * 10));
// }

// console.log("1-array:", numbers);

// let sum = numbers.for((a, b) => a + b, 0);
// console.log("yig'indi:", sum);

// if (numbers[0] % 2 === 0) {
//   numbers.unshift(1);

//   console.log("juft");
// } else {

//     numbers.push(1);
//   console.log("toq");
// }

// console.log("2-array:", numbers);

// 5

// let arr = [10, 20, 30, 40, 50];

// console.log("1-array:", arr);

// let firstElement = arr[0];
// let lastElement = arr[arr.length - 1];

// arr[0] = lastElement;
// arr[arr.length - 1] = firstElement;

// console.log("array:", arr);

// 6
// function sozniYig(count = 0, words = []) {
//     if (count >= 6) {
//       return words;
//     }
  
//     const word = prompt(`Iltimos, ${count + 1}-so'zni kiriting:`);
//     if (word) {
//       words.push(word);
//     } else {
//      console.log("Qaytadan urinib ko'ring.");
//     }
  
//     return sozniYig(words.length, words);
//   }
  
//   // Misol uchun chaqirish:
//   const result = sozniYig();
//   console.log("so'zlar:", result);

// vazifa1
// 1
// function sonniqoshish() {
//     let a = prompt("1-sonni kiriting");
//     let b = prompt("2-sonni kiriting");

//     let yigindi = a+b;
//     console.log("Yig'indi: " + yigindi)
//     return yigindi;
// }
// sonniqoshish();

// 2
// function addNumbers(a,b){
// console.log(a+b);
// }
// addNumbers (5,2)


// 3
// function Musbatlar(arr) {
//     let natija = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         natija.push(arr[i]);
//       }
//     }
  
//     return natija;
//   }
  
//   let a = [-3, 5, 0, -1, 8];
//   let musbatlar = Musbatlar(a);
//   console.log(musbatlar);
  
// 5
// const personA = [
// {
//     name: "Abdulloh",
//     age: 19,
//     status: false
// },
// {
//     name: "ibrohim",
//     age: 20,
//     status: true
// },
// {
//     name: "shodiyor",
//     age: 18,
//     status: false
// }
// ];
// for (let i = 0; i < personA.length; i++) {
//     if (personA[i].status === false) {
//       console.log(personA[i].name);
//     }
//   }

// 6

function ortaArifmetikWhile(arr) {
    let toplam = 0;
    let i = 0;
    while (i < arr.length) {
        toplam += arr[i];  //toplam=toplam+arr[i]
        i++;
    }
    return arr.length > 0 ? toplam / arr.length : 0;
}
let arr = [1, 2, 3, 4, 5];

console.log(ortaArifmetikWhile(arr));