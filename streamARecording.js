require('dotenv').config()
const freeclimbSDK = require('@freeclimb/sdk')
const accountId = process.env.ACCOUNT_ID
const apiKey = process.env.API_KEY
const configuration = freeclimbSDK.createConfiguration({ accountId, apiKey })
const freeclimb = new freeclimbSDK.DefaultApi(configuration)
const recordingId = 'YOUR_RECORDING_ID'

freeclimb.streamARecordingFile(recordingId)
  .then(({ data }) => {
    console.log(`Received ${data.length} bytes of data.`)
  }).catch(err => {
    console.log(err)
  })