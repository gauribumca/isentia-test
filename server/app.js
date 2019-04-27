const express = require('express');
const app = express();
const routes = require('./routes/route');
const bodyParser = require('body-parser');


const port = 3000;


const allowCrosOriginAccess = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}

const runServer = () => {
    app.listen(port, (err, resp) => {
        if (err) {
            console.error(`Server error ${err}`)
        } else {
            console.log(`Application running at ${port}`);
        }
    })
}

app.use(allowCrosOriginAccess);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api', routes);
app.use(express.static(__dirname + '/public'));
runServer();

module.exports = app; // for testing