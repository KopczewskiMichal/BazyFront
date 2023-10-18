function mapSQRT(arr) {
    return helper(arr)

    function helper(inArr, outArr = []) {
        if (inArr[0] != undefined) {
            const square =  inArr[0] ** 0.5;
                inArr.shift()   ;         
            return helper(inArr, [ ...outArr, square])
        } else {
            return outArr;
        }
    }
}


console.log(mapSQRT([1,2,3,4,25]))