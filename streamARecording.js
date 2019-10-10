require('dotenv').config()
const persephonySDK = require('@persephony/sdk')
const accountId = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
const persephony = persephonySDK(accountId, authToken)

persephony.api.recordings.stream(recordingId).then(stream => {
  stream.on('data', chunk => {
    console.log(`Received ${chunk.length} bytes of data.`)
  })
  stream.on('end', () => {
    console.log('no more data!')
  })
}).catch(err => {
  // Handle Errors
})