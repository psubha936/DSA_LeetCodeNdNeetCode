class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){ return false};
        const seen = new Map();
        for(let i =0; i<s.length ;i++){
            seen.set(s[i],(seen.get(s[i]) ?? 0)+1);
            seen.set(t[i],(seen.get(t[i]) ?? 0) -1)
        }
        // for(let i = 0; i<t.length;i++){
        //     if(!seen.has(t[i])) return false
        //     seen.set(t[i],seen.get(t[i])-1)
        // }
        for(let i=0; i<s.length;i++){
            if(seen.get(s[i])!== 0) return false
        }
        return true

    }
}
