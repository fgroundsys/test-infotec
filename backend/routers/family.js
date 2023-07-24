const express = require('express');
const router = express.Router();

// Ruta para obtener todos los miembros de la familia
router.get('/familyMembers', async (req, res) => {
  try {
    res.json(['Propio','Mamá', 'Papá', 'Hermanos', 'Otros']);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los miembros de la familia' });
  }
});

module.exports = router;