new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}

[...new Set("referee")].join("") // 'ref'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// {Array(3) => true}
// {Array(3) => false}



// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

let hasDuplicate = (arr) => {return new Set(arr).size !== arr.length}


// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }


function isVowel(char) {
    return "aeiou".includes(char)
}
function vowelCount(str) {
    const vowel = new Map();
    for(let char of str){
        let charLowerCase = char.toLowerCase();
        if(isVowel(charLowerCase)){
            if(vowel.has(charLowerCase)){
                vowel.set(charLowerCase, vowel.get(charLowerCase) + 1)
            }
            else {
                vowel.set(charLowerCase, 1)
            }
        }
    }
    return vowel;
}