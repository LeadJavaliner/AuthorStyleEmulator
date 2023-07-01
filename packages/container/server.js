const express = require('express');
const openai = require('openai');
const app = express();

openai.apiKey = 'YOUR_OPENAI_API_KEY';

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
