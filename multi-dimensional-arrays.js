
const arrFunc = (arrParam, target) => {
  
  let pairArr = [];
  for(let i = 0; i < arrParam.length; i++){
    for(let j = i + 1; j < arrParam.length; j++){
      if(arrParam[i] + arrParam[j] === target){
        let pairs = [arrParam[i], arrParam[j]];
        pairArr.push(pairs);
      } 

    }
  }
  return pairArr;
}


const arr = [2, 3, 4, 6, 5];

const res = arrFunc(arr, 5);
console.log(res);


// const getArrPairs = (arr1, arr2) => {
//   let arrRes = [];
  
//   for(let i = 0; i < arr1.length; i++){
//     let el1 = arr1[i];
//     let el2 = arr2[i];
//     let pair = [el1 + " : " + el2];
//     arrRes.push(pair);
//   }
//   return arrRes;

// }

// const arrArg1 = ['a', 'b', 'c'];
// const arrArg2 = [1, 2, 3, 4];

// const resArr = getArrPairs(arrArg1, arrArg2);
// console.log(resArr);


let arrPrac = [7, 80, 6, 9, 12];

const getMax = arrPrac.reduce((a, c) => a > c ? a : c, 0);
console.log(getMax);

const getSum = arrPrac.reduce((a, c) => a + c, 0);
console.log(getSum);

const getMin = arrPrac.reduce((a, c) => a < c ? a : c, Number.MAX_VALUE);
console.log(getMin);




const isPalindrome = str => {

  const strLowerCase = str.toLowerCase();
  const chArr = strLowerCase.split('');
  const revArr = chArr.reverse();
  const revStr = revArr.join('');
  return revStr === strLowerCase;
}

const isPal = isPalindrome('Mom');
console.log("Palindrome: " + isPal);


const grades = [87, 77, 69, 91, 86];

const lowestGrade = Math.min(...grades);

console.log(lowestGrade);

const car = {
  make: "Audi",
  model: "A3",
  year: 2018,
  color: "grey"

}

const car2 = {
  make: "Mercedes",
  model: "63",
  year: 2020,
  color: "black",
  price: 80000

}

const arrArr = ['red', 'white', 'blue', 'green'];
const arr1 = [1,2,3,4];
const arr2 = [2,4,6,8];

const [pri, sec, ter, quar] = arrArr;
console.log(sec);
console.log(ter);

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const {year, color } = car;
console.log(year);
console.log(color);

const {make, ...rest} = car;
console.log(make);
console.log(rest);

