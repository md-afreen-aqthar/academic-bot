const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Allows cross-origin requests from your React frontend

// ChatGPT API endpoint
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message; // The message from the frontend

  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userMessage }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const chatResponse = response.data.choices[0].message.content;
    res.json({ message: chatResponse });
  } catch (error) {
    console.error('Error with ChatGPT API:', error);
    res.status(500).json({ error: 'An error occurred while communicating with ChatGPT API' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
