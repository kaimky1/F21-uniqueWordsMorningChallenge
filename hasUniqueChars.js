//Given a word, return true if that word contains only unique characters. Return false otherwise.

//For example:

//hasUniqueChars("Monday")
// returns true
//hasUniqueChars("Moonday")
// returns false
//Uppercase and lowercase letters should be considered separately:

//hasUniqueChars("Bob")
// returns true


// Write your code below

const hasUniqueCharacters = (word) => {
    for(i = 0; i < word.length; i++){
        for(j = i + 1; j < word.length; j++){
            if(word[i] === word[j]){
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueCharacters('Moonday'))