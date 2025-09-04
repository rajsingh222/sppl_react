import React from 'react';
import { DASHBOARD_URL } from '../config';

export default function Dashboard() {
  const url = DASHBOARD_URL || '';
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-sky-100 flex flex-col">
      <main className="flex-1 pt-20 pb-0 min-h-0">
        <div className="w-full h-[calc(100vh-5rem)]">
          {url ? (
            <iframe
              title="Dashboard"
              src={url}
              className="w-full h-full border-0"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-700">Set DASHBOARD_URL in <code>src/config.js</code> to your dashboard app URL or a local path like <code>/dashboard-app/index.html</code>.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
