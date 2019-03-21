const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
    res.status(200)
    res.json({'pong': true})
})

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`server is listening on port: ${port}`)
})

//node index.js needed to start the the server,
// we updated the package.json with the 'start' : 'index.js' inside scripts
//

