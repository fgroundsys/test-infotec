const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const desgloseSchema = new mongoose.Schema({
  integrante: { type: String, required: true },
  monto: { type: Number, required: true },
});

const detallePresupuestoSchema = new mongoose.Schema({
  año: { type: Number, required: true },
  desglose: [desgloseSchema],
});

const presupuestoFamiliarSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  fechaRegistro: { type: Date, default: Date.now },
  detallePresupuesto: [detallePresupuestoSchema],
  tipoCambioDolar: { type: Number, required: true },
});

const PresupuestoFamiliar = mongoose.model('PresupuestoFamiliar', presupuestoFamiliarSchema);

module.exports = PresupuestoFamiliar;