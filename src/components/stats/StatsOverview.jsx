import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart, HardHat, Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

const StatCard = ({ title, value, icon: Icon, color, ethValue = false, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
    <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-500/50 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-400">{title}</CardTitle>
        <Icon className={`h-5 w-5 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold flex items-center">
          {ethValue && <EthereumLogo className="h-6 w-6 mr-2 text-gray-400" />}
          {value.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export default function StatsOverview({ data }) {
  const stats = [
    { title: 'Total Volume (24h)', value: data.totalVolume, icon: TrendingUp, color: 'text-green-400', ethValue: true },
    { title: 'Total Sales (24h)', value: data.totalSales, icon: BarChart, color: 'text-blue-400' },
    { title: 'Average Price (24h)', value: data.avgPrice, icon: HardHat, color: 'text-purple-400', ethValue: true },
    { title: 'Active Wallets (24h)', value: data.activeWallets, icon: Wallet, color: 'text-yellow-400' },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={stat.title} {...stat} delay={index * 0.1} />
      ))}
    </div>
  );
}