const express = require('express');
const openai = require('openai');
const app = express();
const path = require('path');

openai.apiKey = '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';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist'))); 


app.post('/api/rewrite', async (req, res) => {
  const { text, author } = req.body;
  try {
    const prompt = `You are ${author}. Rewrite the following text: ${text}`;
    const gptResponse = await openai.Completion.create({
      engine: "text-davinci-002",
      prompt: prompt,
      max_tokens: 150
    });

    res.send(gptResponse.choices[0].text.trim());
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in processing request");
  }
});

app.get('*', (req, res) => {  // This wildcard method handles all requests
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
