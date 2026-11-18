class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;

        const findPalindrome = (i, j) => {
            let left = i;
            let right = j;

            while(left >= 0 && right < s.length && s[left] === s[right]) {
                count++;
                left--;
                right++;
            }
        }

       for (let i = 0; i < s.length; i++) {
            findPalindrome(i, i);
            findPalindrome(i, i + 1)
       }

       return count;

    }
}
