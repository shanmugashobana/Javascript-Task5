// 1) Finding a number is odd or even using arrow function
const check = num => (num % 2 === 0 ? "Even" : "Odd");
console.log("1) Odd/Even:");
console.log(check(4));
console.log(check(7));
console.log(check(0));

// 2) Result Evaluator — Pass or Fail
function evaluateResult(marks) {
  if (marks < 0 || marks > 100) {
    return "Invalid Marks";
  }
  return marks >= 50 ? "Pass" : "Fail";
}
console.log("\n2) Result Evaluator:");
console.log(evaluateResult(75));
console.log(evaluateResult(40));
console.log(evaluateResult(120));

// 3) Maximum Finder
const findMax = (a, b, c) => {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
};
console.log("\n3) Maximum Finder:");
console.log(findMax(10, 25, 15));
console.log(findMax(5, 3, 8));
console.log(findMax(9, 9, 2));

// 4) Accumulator
function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log("\n4) Accumulator:");
console.log(sumToN(5));
console.log(sumToN(10));

// 5) Multiplication Table Generator
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
console.log("\n5) Multiplication Table:");
printTable(3);

// 6) Digit Counter
function countDigit(num) {
  if (num === 0) return 1;

  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
console.log("\n6) Digit Counter:");
console.log(countDigit(1234));
console.log(countDigit(9));
console.log(countDigit(10000));

// 7. Number Reverser//
function reverseNumber(num) {
    let reversed = 0;
    while(num >0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return reversed;
}

    console.log(reverseNumber(1234));
    console.log(reverseNumber(500));
    console.log(reverseNumber(91));

    // 8. Factorial calculator//

 function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); 
console.log(factorial(3)); 
console.log(factorial(1)); 

// 9. Prime Validator//
function isPrime(n) {
  if (n < 2) {
    return false;
   
  }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(2));

//10) Pattern Builder — Star Triangle//

function printPattern(n) {
    
    for (let i = 1; i<=n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

printPattern(4)
