const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);

    console.log('get' + posts);
});

app.post('/posts/create', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    await axios.post('http://event-bus-srv:4005/events', {
        type: 'PostCreated',
        data: {
            id, title
        }
    })

    res.status(201).send(posts[id]);

    console.log('post' + posts[id]);
});

app.post('/events', (req, res) => {
    console.log('Received Event', req.body)
    res.send({});
});

app.listen(4000, () => {
    console.log('zhenglinli9875/posts:0.0.6');
    console.log('listening on 4000');
});

