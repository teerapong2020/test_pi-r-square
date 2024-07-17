function sumOfTwo(one, target) {
    for (let i = 0; i < one.length; i++) {
        if (one[i] + one[i] === target ) {
            return true;
        }
        for (let j = i + 1; j < one.length; j++) {
            if (one[i] + one[j] === target) {
                return true;
            }
        }
    }
    return false;
}

console.log(sumOfTwo([1,3,5,7,16,4], 8)); 
console.log(sumOfTwo([1,3,5,7,16,4], 12)); 
console.log(sumOfTwo([1,3,5,7,16,4], 18)); 
console.log(sumOfTwo([12,17,14,11,19,8], 20)); 

