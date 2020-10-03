// console.log all numbers 1..100
// --if number is divisible by 3, log "Fizz"
// --if number is divisible by 5 and not 3, log "Buzz"
// --if number is divisible by 3 and 5, log "FizzBuzz"

const fizzBuzz = function() {
    for (let i = 1; i < 101; i++ ) {
        if ( (i % 3 == 0) && (i % 5 == 0) ) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0 && i % 5 > 0) {
            console.log("Fizz")
        } else if (i % 5 == 0 && i % 3 > 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz();