import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Heart, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NFTGrid({ nfts }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-bold text-white">Recently Minted</h2>
        <Info className="w-5 h-5 text-gray-400" />
        <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
          Live
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {nfts.map((nft, index) => (
          <motion.div
            key={nft.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="bg-slate-800/50 border-slate-700/50 overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative">
                {/* Background gradient */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ background: nft.background }}
                />
                
                {/* NFT Image */}
                <div className="relative aspect-square p-4">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img
                      src={nft.image}
                      alt={nft.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-4 bg-black/60 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <Heart className="w-4 h-4 text-white" />
                      </Button>
                      <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </Button>
                    </div>
                  </div>

                  {/* Token ID badge */}
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-black/50 text-white border-0 backdrop-blur-sm">
                      #{nft.id}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="space-y-3">
                    <h3 className="font-bold text-white truncate">{nft.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Owner</span>
                      <span className="text-sm text-blue-400 font-mono">{nft.owner}</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-700">
                      <span className="text-xs text-gray-500">Last Sale</span>
                      <span className="text-sm font-semibold text-white">0.08 ETH</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}