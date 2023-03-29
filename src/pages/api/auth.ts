import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const res = await fetch('http://auth-ms-service/v1/auth/example');
  const data = await res.json();

  response.json(data);
}