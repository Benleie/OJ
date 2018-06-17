console.log(new Date().toString().match(/\d+\:\d+\:\d+/)[0])

function findOdd(arr){
	let uniqueArr = [],
		odd = 0
	for(let i = 0;i<arr.length; i++){
		if(!uniqueArr.includes(arr[i]))
			uniqueArr.push(arr[i])
	}
	for(let i=0; i<uniqueArr.length;i++){
		let count = 0
		for(let j=0;j<arr.length;j++){
			if(arr[j] === uniqueArr[i])
				count++;
		}
		cl('hh')
		if(count%2){
			odd = i;
			break;
		}
	}
	return uniqueArr[odd]
}
findOdd = (xs) => xs.reduce((a, b) => a ^ b);


function descendingOrder(n){
  	if(n < 0)  throw new Error('negative!!')
  	let arr = n.toString().split('').map(v=>Number(v))
  	arr.sort(function(a,b){
  		return b - a;
  	})
  	return Number(arr.join(''))
}
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
// cl(descendingOrder(123456789))



let Vector = function(arr){
	// this[0] = 'ggg';
	this.arr = arr;
}
Vector.prototype.add = function(arrB){
	if(this.arr.length !== arrB.arr.length)
		throw 'gg';
	let result = [];
	for(let i = 0; i<this.arr.length; i++){
		result.push(this.arr[i]+arrB.arr[i])
	}
	return new Vector(result);
}
Vector.prototype.subtract = function(arrB){
	if(this.arr.length !== arrB.arr.length)
		throw  'gg';
	let result = [];
	for(let i = 0; i<this.arr.length; i++){
		result.push(this.arr[i]-arrB.arr[i])
	}
	return new Vector(result);
}
Vector.prototype.dot = function(arrB){
	if(this.arr.length !== arrB.arr.length)
		throw 'gg';
	let result = 0;
	for(let i = 0; i<this.arr.length; i++){
		result += this.arr[i]*arrB.arr[i]
	}
	return result;
}
Vector.prototype.norm = function(){
	let num = 0;
	for(let i = 0; i<this.arr.length;i++){
		num += Math.pow(this.arr[i],2)
	}
	return Math.sqrt(num)
	// return this.map((value,index)=>{Math.pow(this.arr[index],2)})
}
Vector.prototype.toString = function(){
	return '(' + this.arr.toString()+')'
}
Vector.prototype.equals = function(arrB){
	// if(this.arr.length !== arrB.arr.length)
	// 	throw 'gg';
	for(let i = 0; i<this.arr.length; i++){
		if(this.arr[i] != arrB.arr[i])
			return false;
	}
	return true;

}
// var a = new Vector([111,2222]);
// var b = new Vector([333,4444]);
// var c = new Vector([3,4,5]);
/*cl(a.toString())
cl(c.norm())*/














function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}
function declareWinner(fighter1, fighter2, firstAttacker) {
	if(fighter1.name === firstAttacker){
		let temp = fighter1;
		fighter1 = fighter2;
		fighter2 = temp;
	}
	while(1){
		fighter1.health -= fighter2.damagePerAttack;
		if(fighter1.health <= 0)
			return fighter2.name;
		fighter2.health -= fighter1.damagePerAttack;
		if(fighter2.health <= 0)
			return fighter1.name
	}
}
/*let winner = declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
cl(winner)
cl(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"))*/

function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
function countDevelopers(list) {
	let count = 0;
	for(let i = 0; i<list.length; i++){
		if(list[i].continent === 'Europe' && list[i].language === 'JavaScript')
			count++
	}
	return count;
}
// cl(countDevelopers(list1))
function countDevelopers(list) {
  return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}

// let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);

/*console.time('my')
var Ball = function(ballType) {
  // your code goes here
  if(arguments.length)
  	this.ballType = ballType;
  // this.ballType = 'hhh'
  else
  	this.ballType = 'regular'
};
let ball = new Ball()
cl(ball.ballType)
console.timeEnd('my')*/
var Ball = function(ballType){
  	 this.ballType = ballType || 'regular'
}



let data = {
	english: 'Welcome',
	czech: 'Vitejte',
	danish: 'Velkomst',
	dutch: 'Welkom',
	welsh: 'Croeso'
}
let errorArr = ['IP_ADDRESS_INVALID','IP_ADDRESS_NOT_FOUND','IP_ADDRESS_REQUIRED']
function greet(languague){
	if(errorArr.indexOf(languague) !== -1)
		throw new Error("gg!")
	if(!data.hasOwnProperty(languague)){
		return data.english;
	}
	cl('中！')
	return data[languague];
	
}
// cl(greet('IP_ADDRESS_INVALI'))


function getMiddle(str){
	len = str.length;
	return len&1 ? str[(len-1)/2] : str.substr(len/2-1,2);
	
}
// cl(getMiddle('abcdefgh'))
/*if(len & 1)
		cl(str[(len-1)/2])
	else
		cl(str.substr(len/2-1,2))*/

function accum(str){
	let arr = str.toLowerCase().split(''),
		result = [];
	for(let i = 0; i<arr.length; i++){
		let countStr = arr[i].toUpperCase();
		for(let j = 0; j<i;j++)
			countStr += arr[i]
		result.push(countStr)
	}
	return result.join('-');

}
// cl(accum('abcdf'))

/*let decodeMorse = function(morseCode){

}
var str = '.... . -.--   .--- ..- -.. .';
var pp = /^\s*(.+?)\s*$/
let arr1 = [], 
	arr = [];
str = pp.exec(str)[1]
arr1 = str.split('   ')
for(let i = 0; i<arr1.length; i++){
	let arrWord = arr1[i].split(' ');
	for(let j = 0;j<arrWord.length; j++){
		arrWord[j] = '+'
	}
	arr.push(arrWord.join(''))
}
cl(arr)*/

let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function chords(root) {
	let majorChord = [],
		minorChord = [];
	let index = notes.indexOf(root)
	var myNotes = [];
	for(let i = 0; i<notes.length; i++){
		myNotes[i] = notes[i];
		myNotes[i+notes.length] = notes[i];
	}
	majorChord = [root,myNotes[index+4],myNotes[index+7]];
	minorChord = [root,myNotes[index+3],myNotes[index+7]];
   	return [majorChord, minorChord];
}
// cl(chords('G'))

/*function solution(pairs){
	var arr = Object.getOwnPropertyNames(pairs)
	arr = arr.map(value=>{ return value + ' = ' + pairs[value]})
	return arr.join(',')
}
solution({a: 1, b: '2'})
*/

/*function nbYear(p0, percent, aug, p) {
	let count = 0;
	while(p > p0){
		count++;
		p0 =  p0*(1+percent/100) + aug;
	}   
	return count;
}
cl(nbYear(1500, 5, 100, 5000))*/
/*function nbYear(p0, percent, aug, p) {
  for(var y = 0; p0 < p; y++) 
  	p0 = p0 * (1 + percent / 100) + aug;
  return y;
}*/
/*function odds(values){
  return values.filter( x=>x&1 );
}
cl(odds([1,2,3,4,5]))*/

function solution(number){
	let result = 0;
	for(let i = 0; i<number;i++){
		if(i%3 === 0 || i%5 === 0 )
			result += i;
	}
	return result;
}
// cl(solution(23))

function sumDigPow(a, b) {
	let result = [];
	for(let i = a; i<=b; i++){
		let num = i.toString(),
			add = 0
		for(let j = 0;j<num.length;j++){
			add += Math.pow(num[j],j+1)
		}
		if(add === i)
			result.push(i)
	}
	return result;
}
// cl(sumDigPow(1,1000))
function queueTime(customers, n) {
	let till = Array(n);
	if(till.length > customers.length)
		return Math.max.apply(null,customers)
	for(let i=0; i<till.length; i++){
		till[i] = customers[i];
	}
	for(let i = till.length; i<customers.length;i++){
		let min = till.indexOf(Math.min.apply(null,till))
		till[min] += customers[i];
	}
	return Math.max.apply(null,till);
}
// cl(queueTime([1,2,3,4], 3))
// var arrMix = [1,2,2,3,3,-3,4,4];
// cl(arrMix.indexOf(Math.min.apply(null,arrMix)))

/*var func = ['one','two','three'],
	funcNum = [1,2,3];
	let ooo = func[0]
	let hhhhh = eval(ooo)
function hhhhh(some){
	return funcNum[0]+some;
}
cl(one(100))*/

console.log(Object.prototype.constructor) // true






