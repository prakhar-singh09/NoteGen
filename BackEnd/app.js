const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const {authRoute} = require('./routes/auth');
const {noteRoute} = require('./routes/notes');

require('dotenv').config()

connectToMongo();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

if (process.env.PORT) {
    app.listen(PORT, () => {
        console.log(`Listening on port http://localhost:${PORT}`);
    });
}
module.exports = app;
