const express = require('express');
const PORT = 3200;
const app = express();


app.get('/', (req, res) => {
    res.status(200)
        .set({
            'Content-type':'application/json'
        })
        .send({
            'status' : 'ok',
            'message' : 'Node is running well with volume shared !',
            'message_2': 'and tested with restart!',
            "message_3" : "sharing the docker parctical session"
        });

});

app.listen(PORT, () => {});