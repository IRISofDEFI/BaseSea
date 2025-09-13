import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Zap, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

export default function FeaturedDrop({ drop }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const mintTime = new Date(drop.mintDate).getTime();
      const difference = mintTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [drop.mintDate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-pink-900/20 border border-gray-700/50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Left: Content */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <Badge className="w-fit bg-purple-500/20 text-purple-300 border-purple-500/30">
              Featured Drop
            </Badge>
            <h2 className="text-4xl font-bold">{drop.title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {drop.description}
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>by</span>
              <Badge variant="outline" className="border-blue-500/30 text-blue-400">
                {drop.creator}
              </Badge>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/20 rounded-lg p-4 border border-gray-700/50">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Mint Price</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xl font-bold">{drop.mintPrice}</span>
                <EthereumLogo className="w-5 h-5 text-gray-300" />
              </div>
            </div>
            <div className="bg-black/20 rounded-lg p-4 border border-gray-700/50">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Supply</span>
              </div>
              <div className="text-xl font-bold mt-1">
                {drop.totalSupply.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="bg-black/20 rounded-lg p-6 border border-gray-700/50">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400">Mint starts in</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="text-2xl font-bold text-white">{value.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400 uppercase">{unit}</div>
                </div>
              ))}
            </div>
          </div>

          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full">
            <Bell className="w-5 h-5 mr-2" />
            Join Whitelist
          </Button>
        </div>

        {/* Right: Image */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <img
              src={drop.image}
              alt={drop.title}
              className="w-full max-w-md aspect-square object-cover rounded-xl border border-gray-700/50"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-xl opacity-20 blur-lg" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}