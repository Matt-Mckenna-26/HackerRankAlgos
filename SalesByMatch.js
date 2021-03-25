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

console.log(sortAndCount(10, [1,5,2,4,5,2,1,4,5,3]))