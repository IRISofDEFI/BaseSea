
import React from 'react';
import { Verified, Heart } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import QuantitySelector from './QuantitySelector';
import { Button } from '@/components/ui/button';

const InfoCard = ({ title, value, children }) => (
  <div className="bg-[#111827] border border-gray-700 rounded-lg p-4 flex-1">
    <p className="text-sm text-gray-400 mb-2">{title}</p>
    {value && <p className="text-lg font-bold">{value}</p>}
    {children}
  </div>
);

const EthereumLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 256 417" fill="currentColor">
    <path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" fill="#343434"/>
    <path d="M127.962 0L0 212.32l127.962 75.639V154.158z" fill="#8C8C8C"/>
    <path d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z" fill="#3C3C3B"/>
    <path d="M127.962 416.905v-104.72L0 236.585z" fill="#8C8C8C"/>
    <path d="M127.961 287.958l127.96-75.637-127.96-58.162z" fill="#141414"/>
    <path d="M0 212.32l127.96 75.638v-133.8z" fill="#393939"/>
  </svg>
);

export default function NFTDetails({ nft, mintedCount, quantity, setQuantity, isMinting, onMint }) {
  const soldPercentage = (mintedCount / nft.totalSupply) * 100;
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold">{nft.title}</h1>
          <Verified className="w-7 h-7 text-blue-500 fill-current" />
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <Heart className="w-5 h-5" />
          <span>{nft.likes}</span>
        </div>
      </div>
      
      <p className="text-sm text-gray-400 mt-3">
        Created {nft.createdDate} by <span className="text-blue-400 cursor-pointer hover:underline">{nft.creator}</span> on <EthereumLogo className="inline w-4 h-4 text-gray-300 mx-1" />
      </p>

      <p className="text-gray-300 mt-6 leading-relaxed">
        {nft.description}
      </p>

      <div className="flex space-x-4 my-8">
        <InfoCard title="Mint Price">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold">{nft.mintPrice.toFixed(2)}</span>
            <EthereumLogo className="w-5 h-5 text-gray-300" />
          </div>
        </InfoCard>
        <InfoCard title="Mint Per User" value="Unlimited" />
        <InfoCard title={`${soldPercentage.toFixed(2)}% sold (${mintedCount}/${nft.totalSupply})`}>
          <Progress value={soldPercentage} className="h-1.5 mt-2 bg-gray-600" indicatorClassName="bg-blue-500" />
        </InfoCard>
      </div>

      <div className="mt-auto">
        <div className="flex items-center gap-4 mb-4">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} max={10} />
          <Button 
            size="lg" 
            className="w-32 bg-blue-600 hover:bg-blue-700 h-12 text-base font-bold rounded-full"
            onClick={onMint}
            disabled={isMinting}
          >
            {isMinting ? "Minting..." : `Mint ${quantity}`}
          </Button>
        </div>
      </div>
    </div>
  );
}
