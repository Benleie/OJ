// 121: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
/* var maxProfit = function(prices) {
  let max = 0;
  for(let i = 0; i < prices.length; i++) {
    for(let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i]
      if(profit > max)
        max = profit
    }
  }
  return max
}; */
var maxProfit = function(prices) {
  let max = 0;
  let minPrice = Number.MAX_VALUE
  for(let i = 0; i < prices.length; i++) {
    if(prices[i] < minPrice) {
      minPrice = prices[i]
    } 
    else if(prices[i] - minPrice > max)
      max = prices[i] - minPrice
  }
  return max
}