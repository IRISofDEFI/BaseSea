import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

export default function MintingPanel({ nft, onMint, isMinting }) {
  const mintProgress = (nft.mintedCount / nft.totalSupply) * 100;

  return (
    <div className="space-y-6">
      {/* Minting Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Mint Price</p>
                <p className="text-2xl font-bold text-white">
                  {nft.mintPrice} <span className="text-lg text-blue-400">ETH</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Mint Per User</p>
                <p className="text-2xl font-bold text-white">Unlimited</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Minting Progress */}
      <Card className="bg-slate-800/50 border-slate-700/50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-white">
              {mintProgress.toFixed(1)}% sold ({nft.mintedCount.toLocaleString()}/{nft.totalSupply.toLocaleString()})
            </span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm">Live</span>
            </div>
          </div>
          <Progress value={mintProgress} className="h-3 bg-slate-700">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300" />
          </Progress>
        </CardContent>
      </Card>

      {/* Minting Interface */}
      <Card className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-slate-600/50">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Ready to Mint?</h3>
              <p className="text-gray-400">Join the exclusive collection of digital art enthusiasts</p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={onMint}
                disabled={isMinting}
                className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isMinting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Minting...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5" />
                    <span>Mint Now</span>
                  </div>
                )}
              </Button>
            </motion.div>

            {isMinting && (
              <div className="space-y-2">
                <Progress value={75} className="h-2" />
                <p className="text-sm text-gray-400">Processing transaction...</p>
              </div>
            )}

            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Gas Optimized</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>Instant Reveal</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}