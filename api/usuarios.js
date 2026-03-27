// api/usuarios.js
// Datos de ejemplo (en producción esto vendría de una DB)
const usuarios = [
  { id: 1, nombre: 'Ana García',      email: 'ana@ejemplo.com',    rol: 'admin'   },
  { id: 2, nombre: 'Carlos López',    email: 'carlos@ejemplo.com', rol: 'usuario' },
  { id: 3, nombre: 'María Martínez',  email: 'maria@ejemplo.com',  rol: 'usuario' },
];

export default function handler(req, res) {
  // Headers de respuesta
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const { method, query } = req; // Extraer método HTTP y parámetros de la URL

  if (method === 'GET') {
    // Si se pasa ?id=N en la URL, buscar ese usuario específico
    if (query.id) {
      const usuario = usuarios.find(u => u.id === parseInt(query.id));

      if (!usuario) {
        // 404 si el usuario no existe
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      return res.status(200).json(usuario); // Retornar el usuario encontrado
    }

    // Sin parámetros: devolver todos los usuarios
    return res.status(200).json(usuarios);
  }

  // Si se usa un método diferente a GET, responder con 405
  res.setHeader('Allow', ['GET']);
  res.status(405).json({ error: `Método ${method} no permitido` });
}