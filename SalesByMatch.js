const  sortAndCount = ( n, arr ) => {
    let sorted = arr.sort((a,b) => a - b);
    let pairs = 0;

    for (let i = 0; i < n - 1; i++) {
        if ( sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
    }
    return pairs;
}

console.log(sortAndCount(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))

console.log(sortAndCount(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3,]))