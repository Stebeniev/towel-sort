module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    const newArr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            newArr.push(...matrix[i]);
        } else {
            newArr.push(...matrix[i].reverse());
        }
    }
    return newArr;
}
