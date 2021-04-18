// Remove item in array by index
const arr = [1,5,9,6]
//--> declare a function to splice index
let removeByIndex = function(arr , index) {
    return arr.splice(index, 1)
}
removeByIndex(arr,1)
console.log(arr);
///////////////////////////////
//function to combine two or more arrays
var array1 = [6,7,8,9,10]
var array2 = [1,2,3,4,5]

let combineArr = function(...arr) {
    let newArr = [].concat(...arr)
   return newArr.sort((a,b) => a-b)
}
console.log(combineArr(array1, array2));

////////3- Remove duplicate items of an Array
let charArray = ['A', 'B', 'A', 'C', 'B','C',1,2,1,2,4,4,6,6];

let uniqueChars = [...new Set(charArray)];
console.log(uniqueChars);
//////////////////////////////////////////////////

//-> 4- A function to extract numbers from a string
const str = 'i have 2 apples and 3 pineapples'
//declare a function to extract numbers from a string
let numberFromStr = function(str){
    const newArray = str.split('')
    const result = [];
    newArray.forEach(item => {
        if (item.match(/\d+/)){
            result.push(item)
        }
    }
    )
    return result
}
console.log(numberFromStr(str));

///////////////////////////////////////
// --> Flat an Array of arrays
let nestedArr = [[2,3],5,[[[2,9],4],4],1,0]
 let newArrrr = nestedArr.flat(Infinity)
 
 console.log(newArrrr);