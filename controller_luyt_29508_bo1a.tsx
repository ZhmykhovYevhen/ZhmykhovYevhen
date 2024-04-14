apple

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
23 + 68
const capitalizeString = str => str.toUpperCase();
const getUniqueValues = array => [...new Set(array)];
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
console.log(getRandomString());
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
apple - true
const reverseString = str => str.split("").reverse().join("");
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
apple * 79
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
banana - 78,51,76,28,3,70,81,15,19,61,23,66,41,80,18,22,72,76,80,9,2,85,26,60,55,27,71,20,53,98,89,17,43,3,32,7,81,5,59,83,23,45,13,1,98,89,12,78,62,77,16
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
apple + 45,0,52,93,59,8,79,25,39,20,31,33,49,64,37,47,19,58,8,37,96,25,14,48,86,69,58,24,75,61,99,58,62,26,6,13,86,67,50,31,35,94,95,38,76,98,5,0,22,1,68,76,5,98
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
