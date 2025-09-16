import React, { useEffect, useRef, useState } from 'react';
import { DASHBOARD_URL } from '../config';

// Embeds the external dashboard with a visual blur over the left sidebar only.
// Your site navbar remains untouched because the blur overlay is scoped to this page container.
export default function Dashboard() {
  const url = DASHBOARD_URL;
  const LEFT_BLUR_WIDTH_PX = 280; // adjust to match the dashboard's left nav width
  const iframeRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [embedBlocked, setEmbedBlocked] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!loaded) setEmbedBlocked(true);
    }, 3500);
    return () => clearTimeout(t);
  }, [loaded]);

  return (
    <div className="relative w-full" style={{ height: 'calc(100vh - 80px)' }}>
      {/* Dashboard iframe */}
      <iframe
        ref={iframeRef}
        src={url}
        title="SPPL Dashboard"
        className="w-full h-full border-0 bg-white"
        allow="fullscreen; clipboard-read; clipboard-write"
        onLoad={() => setLoaded(true)}
      />

      {/* Left-side blur overlay (visual only, does not capture clicks) */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-full backdrop-blur-md backdrop-saturate-150"
        style={{ width: `${LEFT_BLUR_WIDTH_PX}px` }}
      >
        <div className="w-full h-full bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
      </div>

      {/* Blocked/embed status helper */}
      {embedBlocked && !loaded && (
        <div className="absolute inset-x-4 top-4 z-10">
          <div className="mx-auto max-w-xl rounded-lg bg-amber-50 text-amber-900 border border-amber-200 px-4 py-3 shadow">
            <div className="text-sm">
              The dashboard may be blocking embedding in an iframe (X-Frame-Options/CSP). Use the button below to open it in a new tab.
            </div>
          </div>
        </div>
      )}

      {/* Fallback open button (useful if iframe is blocked by CSP/X-Frame-Options) */}
      <div className="absolute bottom-4 right-4 z-10">
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center rounded-md bg-slate-900/70 text-white text-sm px-3 py-2 backdrop-blur-sm hover:bg-slate-900/80"
        >
          Open Dashboard ↗
        </a>
      </div>
    </div>
  );
}
