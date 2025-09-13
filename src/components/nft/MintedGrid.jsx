import React from 'react';

const NFTCard = ({ nft }) => (
  <div className="relative aspect-square group cursor-pointer">
    <div 
      className="absolute inset-0 rounded-lg"
      style={{ backgroundColor: nft.bgColor }}
    />
    <img 
      src={nft.image} 
      alt="Minted NFT" 
      className="absolute inset-0 w-full h-full object-cover rounded-lg p-2 transition-transform duration-300 group-hover:scale-95"
    />
    {/* Corner decorations */}
    <div className="absolute -top-1 -left-1 w-4 h-4 bg-gray-800 transform rotate-45" />
    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-800 transform rotate-45" />
    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gray-800 transform rotate-45" />
    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-800 transform rotate-45" />
  </div>
);

export default function MintedGrid({ nfts }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Minted NFTs<sup className="text-gray-400">®</sup></h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {nfts.map(nft => <NFTCard key={nft.id} nft={nft} />)}
      </div>
    </div>
  );
}