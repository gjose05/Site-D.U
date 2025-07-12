const express = require('express');
const cors = require('cors');
const instagramRoutes = require('./routes/instagramRoutes');

const app = express();

// Configurações para evitar travamentos
app.use(cors());
app.use(express.json());
app.use('/api/instagram', instagramRoutes);

// Rota de saúde
app.get('/health', (req, res) => res.status(200).send('OK'));

// Tratamento de erros global
process.on('uncaughtException', () => {});
process.on('unhandledRejection', () => {});

const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});