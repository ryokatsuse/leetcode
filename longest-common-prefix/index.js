/**
 * @param {string[]} strs
 * @return {string}
 * 一番長い先頭からの文字列で一致するものだけを返す
 */

const longestCommonPrefix = function(strs) {
  let result = strs[0];
    for(let i = 1; i < strs.length; i++){
        let j = 0;
        if(!result.length) return '';
        while(j < strs[i].length && strs[i][j] == result[j])
            j++;
        result = result.slice(0,j);
    }
    return result;

};

console.log(longestCommonPrefix(["flower","flow","flight"]))