// streams are used to read or write sequentially
// writeable, readable, duplex (both read & write), transform (transform while reading)

const { writeFileSync } = require('fs')
for (let i = 0; i < 100000; i ++){
    writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'})
}