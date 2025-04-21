import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    try {
      // Forward the request to the backend
      const response = await axios.post(`${process.env.BACKEND_URL}/api/v1/login`, {email, password}, {
        headers: { 'Content-Type': 'application/json' },
      });
      

      res.status(response.status).json(response.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.error || 'Login failed',
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}