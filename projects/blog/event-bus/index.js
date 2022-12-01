const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body

    events.push(event);

    // posts
    axios.post('http://posts-clusterip-srv:4000/events', event).catch((err) => {
        console.log(err.message, '4000');
    });
    // // comments
    // axios.post('http://localhost:4001/events', event).catch((err) => {
    //     console.log(err.message, '4001');
    // });
    // // query
    // axios.post('http://localhost:4002/events', event).catch((err) => {
    //     console.log(err.message, '4002');
    // });
    // // moderation
    // axios.post('http://localhost:4003/events', event).catch((err) => {
    //     console.log(err.message, '4003');
    // });
    res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(4005, () => {
    console.log('listening on 4005');
});