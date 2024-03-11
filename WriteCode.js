//Sum To Zero
function addToZero(nums) {
    const numSet = new Set();

    for (let num of nums) {
        if (numSet.has(-num)) {
            return true;
        }
        numSet.add(num);
    }

    return false;
}

//Est. Runtime:

//Unique Characters
function hasUniqueChars(word) {
    const charSet = new Set();

    for (let char of word) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }

    return true;
}

//Est. Runtime:

//Panagram Sentence
function isPangram(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const charSet = new Set();

    for (let char of sentence.toLowerCase()) {
        if (alphabet.includes(char)) {
            charSet.add(char);
        }
    }

    return charSet.size === alphabet.length;
}

//Est. Runtime:

//Longest Word 
function findLongestWord(words) {
    let longestLength = 0;

    for (let word of words) {
        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }

    return longestLength;
}

//Est. Runtime: