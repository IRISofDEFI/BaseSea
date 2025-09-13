import React, { useState } from "react";
import Header from "../components/nft/Header";
import FeaturedDrop from "../components/drops/FeaturedDrop";
import DropsGrid from "../components/drops/DropsGrid";
import DropsFilters from "../components/drops/DropsFilters";

export default function Drops() {
  const [filter, setFilter] = useState('all');

  const featuredDrop = {
    title: "Cosmic Warriors",
    creator: "PixelForge Studio",
    description: "An exclusive collection of 10,000 unique cosmic warriors ready to defend the metaverse. Each warrior comes with special powers and rare attributes.",
    image: "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?q=80&w=800&auto=format&fit=crop",
    mintPrice: 0.08,
    totalSupply: 10000,
    mintDate: "2024-01-25T15:00:00Z",
    status: "upcoming"
  };

  const drops = [
    {
      id: 1,
      title: "CyberPunk Cats",
      creator: "NeonArt",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=500&auto=format&fit=crop",
      mintPrice: 0.05,
      totalSupply: 5555,
      mintDate: "2024-01-20T12:00:00Z",
      status: "live",
      whitelisted: 2840
    },
    {
      id: 2,
      title: "Digital Dreamscapes",
      creator: "VisionaryLabs",
      image: "https://images.unsplash.com/photo-1635972463936-25d4e0fae5a8?q=80&w=500&auto=format&fit=crop",
      mintPrice: 0.12,
      totalSupply: 3333,
      mintDate: "2024-01-28T18:00:00Z",
      status: "upcoming",
      whitelisted: 1250
    },
    {
      id: 3,
      title: "Retro Robots",
      creator: "TechnoPixel",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=500&auto=format&fit=crop",
      mintPrice: 0.03,
      totalSupply: 8888,
      mintDate: "2024-01-15T10:00:00Z",
      status: "sold_out",
      whitelisted: 5000
    },
    {
      id: 4,
      title: "Ethereal Beings",
      creator: "MysticArts",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=500&auto=format&fit=crop",
      mintPrice: 0.25,
      totalSupply: 1111,
      mintDate: "2024-02-01T20:00:00Z",
      status: "upcoming",
      whitelisted: 890
    }
  ];

  const filteredDrops = filter === 'all' ? drops : drops.filter(drop => drop.status === filter);

  return (
    <div className="min-h-screen bg-[#040911] text-white font-sans">
      <Header />
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Upcoming Drops
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover the next generation of NFT collections. From emerging artists to established creators, 
            find exclusive drops before they go live.
          </p>
        </div>

        {/* Featured Drop */}
        <FeaturedDrop drop={featuredDrop} />

        {/* Filters and Grid */}
        <div className="mt-16">
          <DropsFilters currentFilter={filter} onFilterChange={setFilter} />
          <DropsGrid drops={filteredDrops} />
        </div>

      </main>
    </div>
  );
}