orange

const squareRoot = num => Math.sqrt(num);

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
67,52,73,53,36,35,4 * grape
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
63 - false
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

kiwi


const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const reverseWords = str => str.split(" ").reverse().join(" ");

const removeDuplicates = array => Array.from(new Set(array));
false / apple
const greet = name => `Hello, ${name}!`;
orange - 90,72,28,31,14,80,7,95,76,74,46,76,30,36,57,34,54,92,64,72,55,54,93,15,67,97,91,54,93,25,84,5,82,14,71,77,40,15,24,82,56,58,13,69,76,81,55,57,55,54,86,32,52,10,88,47,40,91,63,8,52,12,99,7,75,62,49,11,89,84,48,99,99,31
const filterEvenNumbers = numbers => numbers.filter(isEven);

const reverseString = str => str.split("").reverse().join("");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
apple / 64
console.log(getRandomString());
const formatDate = date => new Date(date).toLocaleDateString();

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
