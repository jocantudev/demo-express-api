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

app.get('/participants/:email', (req, res) => {
  const { email } = req.params;
  const participant = participants.find((p) => p.email === email);

  if (!participant) {
    return res.status(404).json({ error: 'Participante no encontrado' });
  }

  res.json({ participant });
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

app.patch('/participants/:email', (req, res) => {
  const { email } = req.params;
  const { newEmail } = req.body;

  if (!newEmail) {
    return res.status(400).json({ error: 'newEmail es requerido' });
  }

  const participant = participants.find((p) => p.email === email);

  if (!participant) {
    return res.status(404).json({ error: 'Participante no encontrado' });
  }

  participant.email = newEmail;

  res.json({ message: 'Email actualizado', participant });
});

app.delete('/participants/:email', (req, res) => {
  const { email } = req.params;
  const index = participants.findIndex((p) => p.email === email);

  if (index === -1) {
    return res.status(404).json({ error: 'Participante no encontrado' });
  }

  participants.splice(index, 1);
  res.json({ message: 'Participante eliminado' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
