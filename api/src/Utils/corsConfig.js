
const corsConfig = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Puedes reemplazar con '*' durante el desarrollo local
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  if (req.method === 'OPTIONS') {
    // Preflight request, respond with 200 OK
    res.status(200).end();
  } else {
    // Pass to next middleware
    next();
  }
};

module.exports = corsConfig;

