const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const participants = [];

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.get('/participants', (req, res) => {
  res.json({ participants });
});

app.post('/participants', (req, res) => {
  const { email, username } = req.body;

  if (!email || !username) {
    return res.status(400).json({ error: 'email y username son requeridos' });
  }

  const participant = { email, username };
  participants.push(participant);

  res.status(201).json({ message: 'Participante guardado', participant });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
