const word = "racecar";
if (isPalindrome(word)) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}
  
 
 function isPalindrome(word) {
   if (word.length <= 1) {
     return true;
   } else if (word[0] === word[word.length - 1]) {
     return isPalindrome(word.slice(1, -1));
   } else {
     return false;
   }
 }


























































































































