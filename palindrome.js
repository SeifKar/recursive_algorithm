function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Base case: If the string is empty or has one character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Check first and last characters, then recursively check the substring
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    }

    return false;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
