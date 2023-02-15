//print the odd number in array 

var arr = [12,13,14,15,16,17];
var odd = function(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 !==0){
            result.push(arr[i])
        }
        
    }
    return result
}
console.log(odd(arr));
//output
//(3) [13, 15, 17]

//IIFE

(function odd(arr){
    var result =[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 !==0){
            result.push(arr[i])
        }
    }
    console.log(result)
})([1,2,3,4,5,6,7,8,9])

//output
//[1, 3, 5, 7, 9]

//Convert all the strings to title caps in a string array
//anonymous function

var arr = ["GUVI","GEEK"]

var titleCase = function(arr){
    var result = [];
    
        for(var i=0;i<arr.length;i++){
            var p = arr[i].toLowerCase().split(" ");
            for(var j=0;j<p.length;j++){
                p[j] = p[j].charAt(0).toUpperCase() + p[j].slice(1);
            }
            result.push(p.join(" "));
        }
        return result
}

console.log(titleCase(arr))
//output
// ['Guvi', 'Geek']

//IIFE

(function titleCase(arr){
    var result = [];
    
        for(var i=0;i<arr.length;i++){
            var p = arr[i].toLowerCase().split(" ");
            for(var j=0;j<p.length;j++){
                p[j] = p[j].charAt(0).toUpperCase() + p[j].slice(1);
            }
            result.push(p.join(" "));
        }    
    console.log(result);
}
)(["benz","audi","suzuki"])

//output
// ['Benz', 'Audi', 'Suzuki']


//sum of all numbers in array
//anonymous function

var a = [1,2,3,4,5,6,7,8,9,10];
var add = function(a){
    var sum = 0;
    for(var i=0;i<a.length;i++){
        sum = sum + a[i]
    }
    return sum
}
console.log(add(a));

//output
//55

//IIFE

var sum =0;
(function add(a){
    
    for(var i=0;i<a.length;i++){
        sum = sum + a[i]
    }
    console.log(sum)
})([1,2,3,4,5,6,7,8,9,10])

//output
//55

//Return all the prime numbers in an array
//anonymous function

var arr = [1,2,3,4,5,6,7,8,9];
var prime = function(arr){
    var result = [];
    for(var i = 2;i<=arr.length;i++){
        for(var j=2;j<i;j++){
            if(i % j !==0){
                break;
            }
            result.push(arr[i])
        }
    } 
    return result
}
console.log(prime(arr))

//output
//[5, 7, 7, 9]

//IIFE
(function prime(arr){
    var result =[];
    for(var i=2;i<=arr.length;i++){
        for(var j=2;j<i;j++){
            if(i%j !==0){
                break;
            }
            result.push(arr[i])
        }
    }
    console.log(result)
})([1,2,3,4,5,6,7,8,9])

//output
//[5, 7, 7, 9]

//Return all the palindromes in an array
//anonymous function

var arr =["racecar","guvi"]
var palindrome = function(arr){
    var result =[];
    for(var i=0;i<arr.length;i++){
        var p = arr[i].split("").reverse().join("")
        if(p === arr[i]){
            result.push(arr[i])
        }
    }
    return result
}
console.log(palindrome(arr))

//output
//['racecar']


//IIFE

(function palindrome(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        var p = arr[i].split("").reverse().join("")
        if(p === arr[i]){
            result.push(arr[i])
        }
    }
    console.log(result)
})(["guvi","racecar","redivider"])

//output
//['racecar', 'redivider']


//Remove duplicates from an array
//anonymous function

var arr = ["apple","mango","pineapple","apple","guava"]
var removeDuplicate = function(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
console.log(removeDuplicate(arr))

//output
//(4) ['apple', 'mango', 'pineapple', 'guava']

//IIFE

(function removeDulicate(arr){
    var result = [];
    for(var i=0;i<arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    console.log(result)
})(["apple","mango","pineapple","guava","apple","mango"])

//output
//(4) ['apple', 'mango', 'pineapple', 'guava']

//rotate an array k times

var arr = [1,2,3,4,5,6];
var result = function(arrRotate,k){
  for(var i=0;i<k;i++){
    arr.push(arr[i])
  }
  for(var i=0;i<k;i++){
    arr.shift()
  }
  return arr;
}
console.log(result(arr,3))

//output
//[4, 5, 6, 1, 2, 3]

//IIFE

(function rotate(arr,k){
    for(var i=0;i<k;i++){
        arr.push(arr[i])
    }
    for(var i=0;i<k;i++){
        arr.shift()
    }
    console.log(arr)
})([1,2,3,4,5,6],3)

//output
//[4, 5, 6, 1, 2, 3]

// return median of two sorted array of same size
var arr1 = [11,12,13,14,15];
var arr2 = [16,17,18,19,20];

var median = function(arr1,arr2){
    arr1.sort();
    arr2.sort();
    var mid1 = Math.floor(arr1.length/2)
    var mid2 = Math.floor(arr2.length/2)
    var mid = (arr1[mid1] + arr2[mid2])/2;
    return mid
}
console.log(median(arr1,arr2))

//output
//15.5

//IIFE

(function median(arr1,arr2){
    arr1.sort();
    arr2.sort();
    var mid1 = Math.floor(arr1.length/2)
    var mid2 = Math.floor(arr2.length/2)
    var mid = (arr1[mid1] + arr2[mid2])/2;
    console.log(mid)
}
)([1,2,3,4,5],[6,7,8,9,10])

//output
//5

//Arrow function

//print odd number in array

var arr = [12,13,15,14,16,17,18]
var odd = (arr)=>{
    var result =[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 !=0){
            result.push(arr[i])
        }
    }
    return result
}
console.log(odd(arr))

//output
//[13, 15, 17]

//Sum of all numbers in an array

var arr = [1,2,3,4,5,6,7,8,9,10]
var add = (arr) =>{
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(add(arr))

//output
//55

//Convert all the strings to title caps in a string array

var arr = ["red","YELLOW","green"];
var titleCase = (arr) =>{
    var result = [];
    for(var i=0;i<arr.length;i++){
        var p = arr[i].toLowerCase().split(" ")
        for(var j=0;j<p.length;j++){
            p[j] = p[j].charAt(0).toUpperCase() + p[j].slice(1)
        }
        result.push(p.join(" "))
    }
    return result
}
console.log(titleCase(arr))

//output
//['Red', 'Yellow', 'Green']

//Return all the prime numbers in an array

var arr = [1,2,3,4,5,6,7,8,9]
var prime = (arr)=>{
    var result = [];
    for(var i = 2;i<=arr.length;i++){
        for(var j=2;j<i;j++){
            if(i % j !==0){
                break;
            }
            result.push(arr[i])
        }
    } 
    return result
}
console.log(prime(arr))

//Return all the palindromes in an array

var arr = ["racecar","guvi"]
var palindrome = (arr) =>{
    var result =[];
    for(var i=0;i<arr.length;i++){
        var p = arr[i].split("").reverse().join("")
        if(p === arr[i]){
            result.push(arr[i])
        }
    }
    return result
}
console.log(palindrome(arr))

//output 
//['racecar']