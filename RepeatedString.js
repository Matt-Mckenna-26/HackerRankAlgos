// There is a string, , of lowercase English letters that is repeated infinitely many times.
//  Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

const repeatedString = (n, stringChain) => {
    let numOfA = 0
    let numOfIterations = Math.floor(n/stringChain.length)
    let remainderOfString = n % stringChain.length
        for(let letter of stringChain){
            if(letter === 'a'){
                numOfA += 1
            }
        }
        numOfA = numOfA * numOfIterations
            let extraString = stringChain.slice(0, remainderOfString)
                for(let letter of extraString){
                    if(letter === 'a'){
                        numOfA += 1
                    }
                }
                console.log(numOfA)
}

repeatedString(10, 'aba')