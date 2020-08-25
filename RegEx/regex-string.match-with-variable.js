// 1408 Easy
// https://leetcode.com/problems/string-matching-in-an-array/

// Given an array of string words. Return all strings in words which is substring of another word in any order. 
// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].


// Example 1:
// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.

// Example 2:
// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".

// Example 3:
// Input: words = ["blue","green","bu"]
// Output: []
 

// [ REGEX .match with variables ]
const stringMatch = ( wordsArr ) => {
   const newArr = [];

   for( let i=0; i<wordsArr.length; i++ ) {
      for( let j=0; j<wordsArr.length; j++ ) {
         // because the .match function does not accept string interpolation or variables
         // instantiate the new RegExp with the arguments beforehand
         // 'g' ensures regex keeps checking even if it finds its first match
         let regCheck = new RegExp( wordsArr[i], 'g' );
         if( 
            j !== i 
            && wordsArr[i].length <= wordsArr[j].length 
            // .match(/regExPatternHere/g)
            // if .match doesn't find anything, it will return null, so the || operator ensures no errors
            && (wordsArr[j].match(regCheck) || []).length > 0
            && newArr.indexOf( wordsArr[i] ) === -1
         ) {
            newArr.push( wordsArr[i] );
         };
      };
   };
   console.log( newArr );
   return newArr;

};

const words1 = ["mass","as","hero","superhero"];
const words2 = ["leetcode","et","code"];
const words3 = ["blue","green","bu"];
const words4 = ["leetcoder","leetcode","od","hamlet","am"];

stringMatch(words4);