class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        for(let i=0;i<nums.length;i++){
            const isInMap = target -nums[i] ;
            if(seen.has(isInMap)){
                return [seen.get(isInMap),i]
            }
            seen.set(nums[i],i)
        }
        return []
    }
}
