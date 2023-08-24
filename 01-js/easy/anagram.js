/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sortstrings(str){
  var array = str.split("");
  array = array.sort();
  var sortedArray = array.join("");
  return sortedArray;
}

function isAnagram(str1,str2){
  var LowerCaseStr1 = str1.toLowerCase();
  var LowerCaseStr2 = str2.toLowerCase();
  
    if(sortstrings(LowerCaseStr1) == sortstrings(LowerCaseStr2)){
        return true;
    }
    else{
        return false;
    }

}
 

//isAnagram("Bad Credit","Debit Card")


module.exports = isAnagram;
