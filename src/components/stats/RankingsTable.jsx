import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';

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

const ChangeIndicator = ({ value }) => {
  const isPositive = value >= 0;
  return (
    <span className={`flex items-center font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
      {isPositive ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
      {Math.abs(value)}%
    </span>
  );
};

export default function RankingsTable({ data, timeFilter, onTimeFilterChange }) {
  const timeFilters = ['24h', '7d', '30d', 'All'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 border border-gray-700/50 rounded-xl"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 md:p-6 border-b border-gray-700/50">
        <div className="flex items-center space-x-2">
          {timeFilters.map(filter => (
            <Button
              key={filter}
              variant={timeFilter === filter ? 'default' : 'ghost'}
              onClick={() => onTimeFilterChange(filter)}
              className={timeFilter === filter ? 'bg-blue-600' : 'text-gray-400'}
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="relative mt-4 sm:mt-0 w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search collections..."
            className="w-full sm:w-64 bg-[#040911] border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-gray-700/50">
            <TableHead className="w-[350px]">Collection</TableHead>
            <TableHead>Volume ({timeFilter})</TableHead>
            <TableHead>Change ({timeFilter})</TableHead>
            <TableHead>Floor Price</TableHead>
            <TableHead>Sales ({timeFilter})</TableHead>
            <TableHead>Owners</TableHead>
            <TableHead>Supply</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id} className="border-gray-800 hover:bg-gray-800/50">
              <TableCell className="font-medium">
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 w-6">{index + 1}</span>
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                  <span className="font-semibold">{item.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <EthereumLogo className="h-4 w-4 text-gray-400" />
                  {item.volume.toLocaleString()}
                </div>
              </TableCell>
              <TableCell>
                <ChangeIndicator value={item.change} />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <EthereumLogo className="h-4 w-4 text-gray-400" />
                  {item.floorPrice.toLocaleString()}
                </div>
              </TableCell>
              <TableCell>{item.sales.toLocaleString()}</TableCell>
              <TableCell>{item.owners.toLocaleString()}</TableCell>
              <TableCell>{item.supply.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}