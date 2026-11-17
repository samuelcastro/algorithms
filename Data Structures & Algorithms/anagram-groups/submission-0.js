class Solution {

    /**
     * 
     * This is a sorted approach which is not very effective
     * Time complexity: O(m * n log n)
     * Space complexity: O(m * n)
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagramsSort(strs) {
       const res = {};

        // First approach is basically sort the strings, and create a hashmap to group all common strings.
       for(let s of strs) {
        // sorting
        const sortedS = s.split('').sort().join('')

        // if the key is not present in the hashmap just initialize it
        if(!res[sortedS]) {
            res[sortedS] = []
        }

        // save similar sorted strings to the hashmap
        res[sortedS].push(s)
       }

        // just retuns the results, Object.values strip away the keys and just return the values.l
       return Object.values(res)
    }

    /**
     * Time Complexity is O(m * n) where m is the number of strings and n length of the longest string.
     * Space Complexity is O(m)
     */
    groupAnagrams(strs) {
       const res = {}

        // initialize an empty array of 26 positions because that's the number of letter in the alphabet and we're only considering lowercase letters, so the goal is create a count that map over ASCII or UTF-16 (a = 97, b = 98)

        for (const s of strs) {
            const count = Array(26).fill(0); // [0, 0, 0, 0, ...] one slot per lowercase letter, a=0 ... z=25

            // Going over each chars of each string to create an array with how many charaters found in the string
            // for example:
            // "abc" will produce a count = [1,1,1,0,0,...]
            // "aabc" will produce a count = [2,1,1,0,...]
            // and then that array will eventually become a key like "1,1,1,0,0,..." or "2,1,1,0,..."
            for (const c of s) {
                // we do this to create an array of characters count
                // we do this because Anagrams have the same count of each letter, so equal counts mean the same group.
                // So the idea is use the alphabet, define how many charaters each string/word has and make it a key
                // so for example the word "aba" will produce: [2,1,0,...] which will become a key: "2,1,0,..."
                // similar keys like "2,1,0,..." means they are anagrams, so we can group they together.
                count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1 // // 'a' is code 97: subtracting it maps a..z to slots 0..25
            }

            //  Turn the counts into a string key. The comma keeps counts like [1,11] and [11,1] apart.
            //  we join the array to a string with a comma separator.
            //  we do this to avoid conflict with others that have other counts like:
            //   [1, 11].join('')   // "111"
            //   [11, 1].join('')   // "111"   same key, different counts
            //   [1, 1, 1].join('') // "111
            // So the count.join(',') is really important to create the right key for that word.
            const key = count.join(',')

            if (!res[key]) {
                res[key] = []
            }

            // push the common words into the array, since we're using a hashmap, doing res[key], means we're pushing words
            // to the same group of anagrams, because they have the same key
            res[key].push(s)
        }

        // we will just return that array using Object.values because we don't actually care about the keys anymore
        return Object.values(res);
        
       }
    
}
