const express       = require('express');
const ejs           = require('ejs');
const bodyParser    = require('body-parser');
const PORT          = process.env.PORT || 3000;
const app           = express();

app.set('view engine', ejs);
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.send('<h1>Hello from Node JS</h1>');
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
})