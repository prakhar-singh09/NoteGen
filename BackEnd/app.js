const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
const {authRoute} = require('./routes/auth');
const {noteRoute} = require('./routes/notes');
require('dotenv').config()
const{ OpenAI } = require('openai');
const os = require("os");

const apiKey = process.env.OPENAI_API_KEY;
connectToMongo();
const openai = new OpenAI({
    apiKey: apiKey, // This is the default and can be omitted
  });

const app = express();

app.use(cors());

app.use(express.json());


const total = os.cpus().length;
console.log(total);

app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));


  app.post('/generate-description', async (req, res) => {
    const { title } = req.body;
  
    try {
      console.log('Received request with title:', title);
      const response = await openai.chat.completions.create({
        temperature: 0.8,
        max_tokens: 100,
        messages: [{ role: 'user', content: `Generate content with title: "${title}"` }],
        model: 'gpt-3.5-turbo',
      });
  
      const generatedDescription = response.choices[0].message.content;
      res.json({ description: generatedDescription });
    } catch (error) {
      console.error('Error generating description:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});


if (process.env.PORT) {
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port http://localhost:${process.env.PORT}`);
    });
}
module.exports = app;
