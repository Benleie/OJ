const NAME1 = 'Snow'
const NAME2 = 'Bran'
// console.log('Bran' === (NAME2 || NAME1))
console.log('Bran' === NAME1 || 'Bran' === NAME2)
console.log([NAME1, NAME2].includes('Bran'))