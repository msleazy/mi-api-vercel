// api/index.js
// Handler principal - endpoint raíz de la API
export default function handler(req, res) {
  // Configurar headers de respuesta
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permite CORS desde cualquier origen

  // Respuesta con información de la API
  res.status(200).json({
    mensaje: 'Bienvenido a mi API desplegada en Vercel',
    version: '1.0.0',
    endpoints: {
      usuarios: '/api/usuarios',
      productos: '/api/productos',
    },
    timestamp: new Date().toISOString(), // Fecha y hora actual en formato ISO
  });
}
