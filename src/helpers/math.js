/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
