class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // The brute force solution would be just sort them and compare, which
        // would produce O(n2)

    // if they are different than the result is false
        if (s.length !== t.length) {
            return false
        }

    // We could sort this both strings which would produce O(n log n)
    // return s.split("").sort().join("") === t.split("").sort().join("")


        // creating the map first
        const mapS = new Map();
        const mapT = new Map();

        // let's create the hashmap first
       for(let i = 0; i < s.length; i++) {
        mapS.set(s[i], 1 + (mapS.get(s[i]) ?? 0))
        mapT.set(t[i], 1 + (mapT.get(t[i]) ?? 0))
       }


        for (const [key, value] of mapS) {
            if(mapT.get(key) !== value) {
                return false
            }
        }

    //    for(let i = 0; i < s.length; i++) {
    //     const ch = s[i]
    //     if (mapS.get(ch) !== mapT.get(ch)) {
    //         return false
    //     }
    //    }

       return true;

    }
}
