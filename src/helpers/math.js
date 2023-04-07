/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Returns a digit from a number at a specified index
 */
export function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * Returns the length of the number with the most digits
 */
export function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, nums[i].toString().length);
    }
    return maxDigits;
}
