// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

const binaryArrayToNumber = arr => {
        // We create an array binarr so we can push the elements of the array arr in reverse by using the for loop. We set the initial value of num as 1 and we double it in each iteration to satisfy the binary number system.
        binarr = []
        let num = 1 
        for(i=arr.length-1; i>=0; i--){
            binarr.push(num)
            num = num * 2
        }
        revbinarr = binarr.reverse()

        thearray = []
        for(i=revbinarr.length-1; i>=0; i--){
            if(arr[i] == 1){
                thearray.push(revbinarr[i])
            } else {
                thearray.push(0)
            }
        }
            
        sumOfArray = thearray.reduce(
            (a, b) => a + b,
          )
        console.log(`${sumOfArray} is the equivalent of the binary [${arr}]`)
};
binaryArrayToNumber([1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1])
console.log('=====')
binaryArrayToNumber([0, 0, 0, 0])
console.log('=====')
binaryArrayToNumber([0, 0, 0, 1])
console.log('=====')
binaryArrayToNumber([0, 1, 0, 1])
console.log('=====')
binaryArrayToNumber([1, 0, 0, 1])