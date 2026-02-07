'use client';

import { useEffect, useState } from 'react';
import { API_ROUTES } from '@app/shared';

interface HealthStatus {
  status: string;
  timestamp: string;
  uptime: number;
}

export default function Home() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch(`http://localhost:4000${API_ROUTES.HEALTH}`);
        const data = await res.json();
        setHealth(data);
      } catch (err) {
        setError('API server is not running');
      }
    };

    checkHealth();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to nene.js</h1>
      <p className="text-lg text-gray-600 mb-8">
        A full-stack monorepo with Next.js and NestJS
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">API Health Check</h2>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : health ? (
          <div className="space-y-2">
            <p>
              Status:{' '}
              <span className="text-green-500 font-medium">{health.status}</span>
            </p>
            <p className="text-sm text-gray-500">
              Uptime: {Math.floor(health.uptime)}s
            </p>
          </div>
        ) : (
          <p className="text-gray-500">Checking...</p>
        )}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 text-center">
        <a
          href="http://localhost:4000/api"
          target="_blank"
          className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <h3 className="font-semibold">API Server</h3>
          <p className="text-sm text-gray-500">localhost:4000</p>
        </a>
        <a
          href="/docs"
          className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <h3 className="font-semibold">Documentation</h3>
          <p className="text-sm text-gray-500">View docs</p>
        </a>
      </div>
    </main>
  );
}
