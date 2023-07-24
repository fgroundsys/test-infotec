const express = require('express');
const familyRoutes = require('./routers/family');
const datosRoutes = require('./routers/presupuestoFamiliar');
const app = express();
const cors = require('cors');
const port = 3000;
const connectDB = require('./db');


// Parsear el cuerpo de la solicitud como JSON
app.use(express.json());

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Conectar a la base de datos MongoDB
connectDB();

// Usar las rutas
app.use('/api', familyRoutes);
app.use('/api', datosRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://backend:${port}`);
});
