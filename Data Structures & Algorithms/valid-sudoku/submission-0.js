class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
        isValidSudoku(board) {
    const seen = new Set();
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
            
                const val = board[i][j];
                    if(val === ".") continue;
                const colKey = `col-${j}-${val}`;
                const rowKey = `row-${i}-${val}`;
                const boxKey = `box-${Math.floor(i/3)*3 + Math.floor(j/3)}-${val}`
                if(seen.has(colKey) || seen.has(rowKey)|| seen.has(boxKey)){
                    console.log(seen,colKey,rowKey,boxKey)
                    return false
                }
                seen.add(colKey);
                seen.add(rowKey);
                seen.add(boxKey);
            }
        }
        return true;
    }
}
