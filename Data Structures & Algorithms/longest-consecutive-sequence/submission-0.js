class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max = 0;
        for(let num of nums){
            if(!set.has(num-1)){
                let current = num;
                let count = 1;
                while(set.has(current+1)){
                    current = current + 1;
                    count++;
                }
                if(max< count){
                    max = count
                }
            }
        }
        return max;
    }
}
