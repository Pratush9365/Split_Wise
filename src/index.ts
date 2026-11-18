import app from "./app";

// Load variables from .env (project root) into process.env.
// If the file doesn't exist, keep going with the defaults below.
try {
  process.loadEnvFile();
} catch {}

const PORT = Number(process.env.PORT) || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`Server running on ${BASE_URL}`);
});
