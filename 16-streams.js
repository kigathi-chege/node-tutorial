// streams are used to read or write sequentially
// writeable, readable, duplex (both read & write), transform (transform while reading)

const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf-8' })

stream.on('data', (result) => {
    console.log(result.length)
}) 

stream.on('error', (err) => {
    console.log(err)
})