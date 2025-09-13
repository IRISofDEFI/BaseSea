import React, { useState } from 'react';
import Header from '../components/nft/Header';
import StatsHeader from '../components/stats/StatsHeader';
import StatsOverview from '../components/stats/StatsOverview';
import RankingsTable from '../components/stats/RankingsTable';

// Mock Data
const overviewData = {
  totalVolume: 45890.7,
  totalSales: 12456,
  avgPrice: 3.68,
  activeWallets: 7892,
};

const rankingsData = [
  {
    id: 1,
    name: 'Cosmic Warriors',
    image: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?q=80&w=100&auto=format&fit=crop',
    volume: 1985.3,
    change: 12.5,
    floorPrice: 2.5,
    sales: 450,
    owners: 3200,
    supply: 10000,
  },
  {
    id: 2,
    name: 'Digital Dreamscapes',
    image: 'https://images.unsplash.com/photo-1635972463936-25d4e0fae5a8?q=80&w=100&auto=format&fit=crop',
    volume: 1204.1,
    change: -5.2,
    floorPrice: 1.8,
    sales: 312,
    owners: 2100,
    supply: 3333,
  },
  {
    id: 3,
    name: 'CyberPunk Cats',
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=100&auto=format&fit=crop',
    volume: 987.6,
    change: 25.8,
    floorPrice: 0.9,
    sales: 870,
    owners: 4100,
    supply: 5555,
  },
  {
    id: 4,
    name: 'Retro Robots',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=100&auto=format&fit=crop',
    volume: 754.2,
    change: 8.1,
    floorPrice: 0.5,
    sales: 1250,
    owners: 5500,
    supply: 8888,
  },
  {
    id: 5,
    name: 'Ethereal Beings',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=100&auto=format&fit=crop',
    volume: 501.9,
    change: -15.3,
    floorPrice: 4.2,
    sales: 95,
    owners: 800,
    supply: 1111,
  },
];


export default function Stats() {
  const [timeFilter, setTimeFilter] = useState('24h');

  return (
    <div className="min-h-screen bg-[#040911] text-white font-sans">
      <Header />
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <StatsHeader />
        <StatsOverview data={overviewData} />
        <div className="mt-12">
          <RankingsTable 
            data={rankingsData} 
            timeFilter={timeFilter}
            onTimeFilterChange={setTimeFilter}
          />
        </div>
      </main>
    </div>
  );
}