
const numArr = [5, 4, 4, 2, 2, 8];
const numArr2 = [1, 13, 3, 8, 14, 9, 4, 4];


const cutTheSticks = arr => {

  
  arr.sort((a, b) => (a - b));
  const dups = arr.filter((e, i, a) => a.indexOf(e) !== i);
  const pairs = dups.length;
  let cutLen = arr[0]; 
  let arr2 = [];
  arr2.push(arr.length);
  let count = 0;
  for(let i = 0; i < arr.length-pairs-1; i++){
      cutLen = arr[count]; //1
      for(let j = count; j < arr.length; j++){
          if(arr[j] - cutLen !== 0){
              arr[j]=arr[j]-cutLen;
          }
          else{
              arr[j]= 0;
              count++
            
          }
        
         
       
      }
      arr2.push(arr.length-count); 
  }
  return arr2;
}

const resArr = cutTheSticks(numArr);
console.log(resArr);



//8,7,6,4,3,2,1
