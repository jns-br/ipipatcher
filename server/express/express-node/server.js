const config = require("../config");
const express = require("express");
const Max = require("max-api");
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());

const port = config.PORT;

function anypost(str) {
	if (Max) {
		Max.post(str);
	} else {
		console.log(str);
	}
}

app.post('/', async (req, res) => {
  try {
    anypost('request received');
    //const {extraversion, agreeableness, conscientiousness, neuroticism, imagination} = req.body;
    const result = req.body;
    if (Max) await Max.outlet(result);
    res.json();
  } catch (err) {
    console.error(err.message);
    res.status(500).json({message: err.message})
  }
});

app.listen(port, () => {
	anypost(`Max Server listening on port ${port}!`);
});
