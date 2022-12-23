const express = require('express');
const app = express();
const { port } = require('./helpers/config');
const cors = require('cors');
const bodyParser = require('body-parser');

const mockRoutes = require('./routes/mock')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {
    res.json({message: 'Welcome to the API!'});
});

app.use('/mock', mockRoutes);

app.listen(port, () => {
    console.log('Server started on port %s', port);
})
