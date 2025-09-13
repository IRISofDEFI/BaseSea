import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, Bell, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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

const StatusBadge = ({ status }) => {
  const statusConfig = {
    upcoming: { color: "bg-blue-500/20 text-blue-400 border-blue-500/30", icon: Clock, text: "Upcoming" },
    live: { color: "bg-green-500/20 text-green-400 border-green-500/30", icon: CheckCircle, text: "Live Now" },
    sold_out: { color: "bg-red-500/20 text-red-400 border-red-500/30", icon: CheckCircle, text: "Sold Out" }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Badge className={`${config.color} flex items-center gap-1`}>
      <Icon className="w-3 h-3" />
      {config.text}
    </Badge>
  );
};

const DropCard = ({ drop, index }) => {
  const mintDate = new Date(drop.mintDate);
  const isLive = drop.status === 'live';
  const isSoldOut = drop.status === 'sold_out';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="bg-gray-900/50 border-gray-700/50 overflow-hidden group hover:scale-105 transition-all duration-300">
        <div className="relative">
          <img
            src={drop.image}
            alt={drop.title}
            className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <StatusBadge status={drop.status} />
          </div>

          {/* Live indicator */}
          {isLive && (
            <div className="absolute top-4 right-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            {isLive ? (
              <Button className="bg-green-500 hover:bg-green-600">
                Mint Now
              </Button>
            ) : isSoldOut ? (
              <Button disabled className="bg-gray-600 cursor-not-allowed">
                Sold Out
              </Button>
            ) : (
              <Button variant="outline" className="border-white/30 hover:bg-white/10">
                <Bell className="w-4 h-4 mr-2" />
                Notify Me
              </Button>
            )}
          </div>
        </div>

        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Title and Creator */}
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{drop.title}</h3>
              <p className="text-gray-400 text-sm">by {drop.creator}</p>
            </div>

            {/* Price and Supply */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-xs">Mint Price</p>
                <div className="flex items-center space-x-1">
                  <span className="text-white font-bold">{drop.mintPrice}</span>
                  <EthereumLogo className="w-4 h-4 text-gray-300" />
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs">Supply</p>
                <p className="text-white font-bold">{drop.totalSupply.toLocaleString()}</p>
              </div>
            </div>

            {/* Whitelist Count */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">{drop.whitelisted.toLocaleString()} whitelisted</span>
              </div>
              <div className="text-gray-400 text-sm">
                {mintDate.toLocaleDateString()}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function DropsGrid({ drops }) {
  if (drops.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 text-lg">No drops match your current filter</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {drops.map((drop, index) => (
        <DropCard key={drop.id} drop={drop} index={index} />
      ))}
    </div>
  );
}