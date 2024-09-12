const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
const bodyParser = require("body-parser")
const axios = require("axios") // Import axios

app.use(cors())
app.use(bodyParser.json())

app.post("/formData", (req, res) => {
  const data = req.body;
  console.log(data);
  
  // Send data to Zapier webhook
  axios.post('https://hooks.zapier.com/hooks/catch/19547307/2hr1frq/', data)
    .then(response => {
      console.log('Data successfully sent to Zapier:', response.data);
      res.status(200).send('Data sent to Zapier');
    })
    .catch(error => {
      console.error('Error sending data to Zapier:', error);
      res.status(500).send('Failed to send data to Zapier');
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
