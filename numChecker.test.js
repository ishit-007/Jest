// const { expect } = require("@jest/globals")
// const { test } = require("picomatch")
const numChecker=require("./numChecker")
test('Checks if a given number is actually prime',()=>{
    expect(numChecker.isPrime(371)).toBe(false);
    expect(numChecker.isPrime(37)).toBe(true);
    expect(numChecker.isPrime(1)).toBe(false);
    expect(numChecker.isPrime(39)).toBe(false);
})

test('Checks if a given number is actually Armstrong',()=>{
    expect(numChecker.isArmstrong(371)).toBe(true);
    expect(numChecker.isArmstrong(407)).toBe(true);
    expect(numChecker.isArmstrong(511)).toBe(false);
    expect(numChecker.isArmstrong(370)).toBe(true);
})