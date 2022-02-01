function diagonalDifference(arr) {
    // Write your code here
    var sum1 = 0
    var sum2 = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) {
                sum1 += arr[i][j]
            }
        }
    }
    var k = 0
    var l = arr.length - 1
    while (k < arr.length && l > -1) {
        sum2 += arr[k][l]
        k++
        l--
    }
    return Math.abs(sum1 - sum2)
}