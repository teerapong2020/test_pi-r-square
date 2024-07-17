function largestNumber(nums) {
    if (nums.every(num => num === 0)) return "0";
    return nums.map(String).sort((a, b) => (b + a) - (a + b)).join('');
}

console.log(largestNumber([10, 2, 13, 7])); 
console.log(largestNumber([21, 36, 8, 45])); 