// 121: best-time-to-buy-and-sell-stock
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


//122 best-time-to-buy-and-sell-stock-ii
// 只要价格低于后一天就买，高于后一天就买
var maxProfit = function(prices) {
  let profit = 0;
  let buyPrice = -1;
  for(let i = 0; i < prices.length; i++) {
    if(buyPrice === -1) {
      if(prices[i] < prices[i + 1]) 
        buyPrice = prices[i]
    }
    else if(!prices[i + 1] || prices[i] > prices[i + 1]) {
      profit += prices[i] - buyPrice
      buyPrice = -1
    } 
  }
  return profit
}
console.log(maxProfit([2,1,2,0,1]))