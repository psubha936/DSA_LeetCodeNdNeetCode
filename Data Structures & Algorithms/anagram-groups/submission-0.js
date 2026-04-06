class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(!strs || strs.length === 0) return [];
        const seen = new Map();
        for(let word of strs){
            let count = new Array(26).fill(0);
            for(let char of word){
                count[char.charCodeAt(0) - 97]++;
            }
            let key = count.join("#");
            if(!seen.has(key)){
                seen.set(key,[])
            }
            seen.get(key).push(word);
        }
        return Array.from(seen.values());
    }
}
