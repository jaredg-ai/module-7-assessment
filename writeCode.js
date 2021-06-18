function findLongestWord(string) {
    let str = string.split(" ")
    let findLongest = 0
    let word = null
    str.forEach(function(str) {
        if (findLongest < str.length) {
            findLongest = str.length;
            word = str;
        }
    })
    return word
}

console.log(findLongestWord("the last samurai"))