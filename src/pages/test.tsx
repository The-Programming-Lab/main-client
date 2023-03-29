import { useState, useEffect } from 'react';

interface MessageResponse {
  message: string;
}

function Home() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/auth');
      const data: MessageResponse = await response.json();
      setMessage(data.message);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Message from API:</h1>
      <p>{message}</p>
    </div>
  );
}

export default Home;
