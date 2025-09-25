function printMultiples(num, limit) {
    for (let i = num; i <= limit; i+=num ) {
        console.log(i)
    }

}

printMultiples(2, 10)


function isEvenOrIsOdd(num){
    if(num%2 === 0){
       return 'even'
    } else{
       return 'odd' 
    }
}

console.log(isEvenOrIsOdd(20))
console.log(isEvenOrIsOdd(3))


function findArea(l, w) {
   return l * w
}

console.log(findArea(10, 20));


function findLargest(num1,num2,num3){
   if(num1 > num2 && num1 > num3){
      return num1
   } else if(num2> num1 && num2 > num3){
      return num2
   } else{
      return num3
   
}
}
console.log(findLargest(10,20,30));
console.log(findLargest(10,20,15));


function convertToFahrenheit(Celsius){
return (Celsius *9/5) + 32
}

console.log(convertToFahrenheit(10))


function calculateFactorial(num){
   let factorial = 1
   for(let i = 1; i <= num; i++){
      factorial *= i
   }
   return factorial
}
console.log(calculateFactorial(5))

function checkIfLeapYear(year){
   if(year % 4 === 0){
      return 'Leap Year'
   }
   else{
      return 'Not a Leap Year'
   }
}

console.log(checkIfLeapYear(2024))