import React from 'react';
import { BarChart2 } from 'lucide-react';

export default function StatsHeader() {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <BarChart2 className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
          Marketplace Stats
        </h1>
      </div>
      <p className="text-lg text-gray-400 max-w-3xl">
        Explore real-time analytics for top NFT collections. Track volume, floor prices, and sales activity across the ecosystem.
      </p>
    </div>
  );
}