function find(a,b){
	let result,
		min = Math.min(a,b)
	for(let i = min; i>0; i--){
		if(a%i === 0 && b % i === 0 )
			return i;
	}
}
cl(find(28,36))

//进制转化
cl(Number.parseInt(66,16))
cl((102).toString(16))










