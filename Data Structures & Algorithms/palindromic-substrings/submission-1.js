class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;

        const findPalindrome = (i, j) => {
            let c = 0;
            let left = i;
            let right = j;

            while(left >= 0 && right < s.length && s[left] === s[right]) {
                c++;
                left--;
                right++;
            }

            return c;
        }

       for (let i = 0; i < s.length; i++) {
            let oddCount = findPalindrome(i, i);
            let evenCount = findPalindrome(i, i + 1)

            count += oddCount + evenCount;
       }

       return count;

    }
}
