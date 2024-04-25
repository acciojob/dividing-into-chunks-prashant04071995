const divide = (arr, n) => {
  let result = [];
  let currentSubarray = [];

  for (const num of arr) {
    if (currentSubarray.reduce((sum, val) => sum + val, 0) + num <= n) {
      currentSubarray.push(num);
    } else {
      result.push(currentSubarray);
      currentSubarray = [num]; // Start a new subarray
    }
  }  

  result.push(currentSubarray); // Add the last subarray

  return result.filter(subarr => subarr.length > 0); // Filter out empty subarrays
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = prompt("Enter n: ");

alert(JSON.stringify(divide(arr, parseInt(n))));
