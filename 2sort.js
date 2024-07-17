function customSort(one) {
    const odd1 = one.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    const add2 = one.filter(num => num % 2 === 0).sort((a, b) => a - b);
    return [...odd1, ...add2];
}

console.log(customSort([4,2,5,7,1,6]));
console.log(customSort([25,40,14,91,31,22,49,13,6]));