import React, { useState } from "react";
import Header from "../components/nft/Header";
import NFTDetails from "../components/nft/NFTDetails";
import MintedGrid from "../components/nft/MintedGrid";

export default function NFTMarketplace() {
  const [quantity, setQuantity] = useState(1);
  const [isMinting, setIsMinting] = useState(false);
  const [mintedCount, setMintedCount] = useState(176);

  const nftData = {
    title: "Digital Urban Elite",
    creator: "CHOP...T23",
    createdDate: "Sat, 13 May 2024 13:15:12 GMT",
    description: "Digital Urban Elite is a limited-edition collection inspired by the fusion of modern art and urban culture, brought to life through cutting-edge technology. This hand-crafted NFT is designed to push the boundaries of digital identity, offering collectors a unique piece that stands out in the metaverse.",
    likes: 112,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c4c5a35e2d82bff3e5cc4c/30d9ddc9a_IRIS2.png",
    mintPrice: 3.50,
    totalSupply: 3333,
  };
  
  const mintedNFTs = [
    {
      id: 1,
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c4c5a35e2d82bff3e5cc4c/30d9ddc9a_IRIS2.png",
      bgColor: "#fde047"
    },
    {
      id: 2,
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c4c5a35e2d82bff3e5cc4c/30d9ddc9a_IRIS2.png",
      bgColor: "#ef4444"
    },
    {
      id: 3,
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c4c5a35e2d82bff3e5cc4c/30d9ddc9a_IRIS2.png",
      bgColor: "#d1d5db"
    },
    {
      id: 4,
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c4c5a35e2d82bff3e5cc4c/30d9ddc9a_IRIS2.png",
      bgColor: "#fbbf24"
    }
  ];

  const handleMint = () => {
    setIsMinting(true);
    setTimeout(() => {
      setMintedCount(prev => prev + quantity);
      setIsMinting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#040911] text-white font-sans">
      <Header />
      <main className="max-w-screen-xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Left Side: NFT Image */}
          <div className="lg:col-span-2">
            <div className="aspect-square bg-[#111827] border border-gray-700 rounded-xl p-1.5">
              <img 
                src={nftData.image} 
                alt={nftData.title} 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Side: Details & Minting */}
          <div className="lg:col-span-3">
            <NFTDetails 
              nft={nftData}
              mintedCount={mintedCount}
              quantity={quantity}
              setQuantity={setQuantity}
              isMinting={isMinting}
              onMint={handleMint}
            />
          </div>

        </div>

        <div className="mt-16">
          <MintedGrid nfts={mintedNFTs} />
        </div>
      </main>
    </div>
  );
}