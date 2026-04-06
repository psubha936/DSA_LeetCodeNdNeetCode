class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let num of nums){
            map.set(num,(map.get(num) || 0)+1);
        }
        const buckets =  Array(nums.length + 1).fill().map(() => []);
        console.log (buckets,map);
        for(let [num , feq] of map){
            buckets[feq].push(num);
        }
        console.log (buckets);
        const result = [];
        for(let i= buckets.length-1;i>=0 && result.length <k ; i--){
            if(buckets[i].length > 0){
                result.push(...buckets[i])
            }
        }
        return result;
    }
}
