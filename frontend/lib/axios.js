import axios from 'axios';

const API_ORIGIN =
  process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

const instance = axios.create({
  baseURL: `${API_ORIGIN}/api/`,           // <— now points at your local /api routes
  // imageURL is non-standard, you’ll use the env var directly for images
});

export default instance;
