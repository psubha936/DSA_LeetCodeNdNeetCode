class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxlength = 0;
        for(let i = 0; i<s.length;i++){
            const set = new Set();
            for(let j = i ; j < s.length ; j++){
                if(set.has(s[j])){
                    break;
                }else{
                    set.add(s[j]);
                    maxlength = Math.max(maxlength, j - i + 1)
                }
            }
        }
        return maxlength;
    }
}
