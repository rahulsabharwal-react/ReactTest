const express = require('express');
var cors = require("cors");
const app = express();
const axios = require('axios');
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.urlencoded());

app.use(express.json());
app.post('/subscribeForm', async (req, res, next) => {
  let userData = {};
  userData["data"] = req.body;
    try {
        let response = await axios.post("https://ckzvgrbymezqegu.form.io/reacttestform/submission",
        JSON.stringify(userData),
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth': 'react-test'
                }
            });
        res.json(response.data);
      }
      catch (err) {
        res.status(400).json(err.response.data);
      }
});
app.get('/', (req, res) => {
  res.send('Welcome to React Test API!');
});
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});