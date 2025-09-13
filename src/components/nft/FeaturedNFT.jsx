import React from "react";
import { motion } from "framer-motion";
import { Verified, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FeaturedNFT({ nft }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      {/* Main NFT Image */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 p-1">
        <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
          <img
            src={nft.image}
            alt={nft.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Action buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="icon" variant="secondary" className="bg-black/50 backdrop-blur-sm hover:bg-black/70">
              <Heart className="w-4 h-4 text-white" />
            </Button>
            <Button size="icon" variant="secondary" className="bg-black/50 backdrop-blur-sm hover:bg-black/70">
              <ExternalLink className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* NFT Details */}
      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-white">{nft.title}</h1>
          <Verified className="w-6 h-6 text-blue-400" />
          <div className="flex items-center gap-2 ml-auto">
            <Heart className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400 font-medium">847</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400">Created</span>
          <span className="text-white font-medium">{new Date(nft.createdDate).toLocaleDateString()}</span>
          <span className="text-gray-400">by</span>
          <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            {nft.creator}
          </Badge>
          <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full ml-1" />
        </div>

        <p className="text-gray-300 leading-relaxed">
          {nft.description}
        </p>
      </div>
    </motion.div>
  );
}