/**
 * @param {number[]} nums
 * @return {number[]}
 */
 //利用哈希表进行数组去重   272ms
var findDuplicates = function(nums){
	let result = [];
    let hash = {};
	for(let i = 0; i<nums.length; i++){
		if(!hash[nums[i]])
			hash[nums[i]] = true;
		else 
			result.push(nums[i]);
	}
	return result;
};

//经典数组去重  五万个数字测试时，这种方法的效率会比哈希法慢几十倍
var findDuplicates = function(nums){
	return nums.filter(function(item, index, array) {
    return array.indexOf(item) !== index;
  });
};

