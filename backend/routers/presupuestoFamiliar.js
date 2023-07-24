const express = require('express');
const router = express.Router();
const PresupuestoFamiliar = require('../models/presupuestoFamiliarModels');

// Ruta para guardar los datos de aportes
router.post('/presupuestoFamiliar', async (req, res) => {
  try {
    const data = req.body;
    const presupuestoFamiliar = new PresupuestoFamiliar({
      detallePresupuesto: data.detalle,
      tipoCambioDolar: data.tipo,
    });
    await presupuestoFamiliar.save();
    console.log(presupuestoFamiliar)
    res.json(presupuestoFamiliar);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error al guardar los datos de aportes' });
  }
});

module.exports = router;


// Ruta para obtener el último registro
router.get('/presupuestoFamiliar/ultimo', async (req, res) => {
    try {
      // Encontrar el último registro en la colección PresupuestoFamiliar
      const ultimoRegistro = await PresupuestoFamiliar.findOne().sort({ fechaRegistro: -1 });
  
      if (!ultimoRegistro) {
        return res.status(404).json({ message: 'No se encontraron registros en la base de datos.' });
      }
  
      // Devolver el último registro encontrado
      res.json(ultimoRegistro);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el último registro.' });
    }
  });
  
  module.exports = router;
