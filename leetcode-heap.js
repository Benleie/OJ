const log = console.log
// 把集中刷过的新题堆积起来，避免忙的时候，完成不了每日3道的日常任务


/**
 * https://leetcode-cn.com/problems/word-break/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict)
    const canBreak = (start) => {
      if(start === s.length) return true
      for(let i = start + 1; i <= s.length; i++) {
        const prefix = s.slice(start, i)
        if(wordSet.has(prefix) && canBreak(i))
          return true
      }
      return false
    }
    return canBreak(0)
};
log(wordBreak('leetcodes', ['leet','s', 'code']))
