let result = false;
const transpose = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            const tmp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = tmp;
        };
    }
    return arr;
}

const horizontalSearch = function (letters, word) {
    let isExist = false;
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            isExist = true

        }
    }
    return isExist;


}

const wordSearch = (letters, word) => {
    if (!letters.length) {
        return false
    } else {
        result = horizontalSearch(letters, word);
        if (!result) {
            letters = transpose(letters);
            result = horizontalSearch(letters, word);
        }

    }
return result;

}

module.exports = {wordSearch, transpose}